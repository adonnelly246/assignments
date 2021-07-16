import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import NewSearch from "./NewSearch"
import SavedSearches from "./SavedSearches"

function Nav(){

    return(

        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/newsearch">New Search</Link>
            <Link to="/savedsearches">Saved Searches</Link>
            </nav>

            <Switch>
             <Route exact path="/" ><Home /></Route>
             <Route path="/newsearch"><NewSearch /></Route>
             <Route path="/savedsearches"> <SavedSearches /></Route>
            </Switch>
            
            
        </div>
    )
}

export default Nav