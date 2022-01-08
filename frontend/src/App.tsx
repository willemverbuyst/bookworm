import React from 'react'
import {
	IonApp,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'
import Authors from './pages/authors'
import Books from './pages/books'
import Login from './pages/login'
import Root from './pages/root'
import '@ionic/react/css/ionic.bundle.css'
import Feedback from './pages/feedback'

setupIonicReact({})

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route path="/home" component={Root} exact={true} />
					<Route path="/login" component={Login} exact={true} />
					<Route path="/books" component={Books} exact={true} />
					<Route path="/authors" component={Authors} exact={true} />
					<Route path="/feedback" component={Feedback} exact={true} />
					<Redirect exact from="/" to="/home" />
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="home" href="/home">
						<IonLabel>Home</IonLabel>
					</IonTabButton>
					<IonTabButton tab="books" href="/books">
						<IonLabel>Books</IonLabel>
					</IonTabButton>
					<IonTabButton tab="authors" href="/authors">
						<IonLabel>Authors</IonLabel>
					</IonTabButton>
					<IonTabButton tab="feedback" href="/feedback">
						<IonLabel>Feedback</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
)

export default App
