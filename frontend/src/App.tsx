import React from 'react'
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
} from '@ionic/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
	bookOutline,
	homeOutline,
	megaphoneOutline,
	pencilOutline,
} from 'ionicons/icons'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'
import Authors from './UI/pages/Authors'
import Books from './UI/pages/Books'
import Feedback from './UI/pages/Feedback'
import Login from './UI/pages/Login'
import PageNotFound from './UI/pages/PageNotFound'
import Root from './UI/pages/Root'
import { useAppState } from './business/overmind'
import '@ionic/react/css/ionic.bundle.css'

setupIonicReact({})

const App: React.FC = () => {
	const { isLoggedIn } = useAppState()

	return (
		<IonApp>
			<IonReactRouter>
				{isLoggedIn ? (
					<IonTabs>
						<IonRouterOutlet>
							<Route exact path="/home" component={Root} />
							<Route exact path="/books" component={Books} />
							<Route exact path="/authors" component={Authors} />
							<Route exact path="/feedback" component={Feedback} />
							<Route exact path="/login" component={Login} />
							<Redirect exact path="/" to="/home" />
							<Route component={PageNotFound} />
						</IonRouterOutlet>
						<IonTabBar slot="bottom">
							<IonTabButton tab="home" href="/home">
								<IonIcon icon={homeOutline} />
								<IonLabel>Home</IonLabel>
							</IonTabButton>
							<IonTabButton tab="books" href="/books">
								<IonIcon icon={bookOutline} />
								<IonLabel>Books</IonLabel>
							</IonTabButton>
							<IonTabButton tab="authors" href="/authors">
								<IonIcon icon={pencilOutline} />
								<IonLabel>Authors</IonLabel>
							</IonTabButton>
							<IonTabButton tab="feedback" href="/feedback">
								<IonIcon icon={megaphoneOutline} />
								<IonLabel>Feedback</IonLabel>
							</IonTabButton>
						</IonTabBar>
					</IonTabs>
				) : (
					<Login />
				)}
			</IonReactRouter>
		</IonApp>
	)
}
export default App
