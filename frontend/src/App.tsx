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
import Authors from './UI/pages/Authors'
import Books from './UI/pages/Books'
import Feedback from './UI/pages/Feedback'
import Login from './UI/pages/Login'
import PageNotFound from './UI/pages/PageNotFound'
import Root from './UI/pages/Root'
import '@ionic/react/css/ionic.bundle.css'

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
