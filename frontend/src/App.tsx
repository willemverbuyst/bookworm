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
import { Route } from 'react-router-dom'
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
					<Route path="/home" component={Root} />
					<Route path="/login" component={Login} />
					<Route path="/books" component={Books} />
					<Route path="/authors" component={Authors} />
					<Route path="/feedback" component={Feedback} />
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
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
