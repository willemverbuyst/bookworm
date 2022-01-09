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
import PageNotFound from './pages/pageNotFound'

setupIonicReact({})

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path="/home" component={Root} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/books" component={Books} />
					<Route exact path="/authors" component={Authors} />
					<Route exact path="/feedback" component={Feedback} />
					<Redirect exact path="/" to="/home" />
					<Route component={PageNotFound} />
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
