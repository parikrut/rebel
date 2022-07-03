import { Route, Switch, withRouter } from "react-router-dom";
import ArtistCreatePage from "../page/create.page";
import ArtistEditPage from "../page/edit.page";
import HomePage from "../page/home.page";

const Routes = () => {
  return (
    <div className="container mx-auto p-5">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/create" render={() => <ArtistCreatePage />} />
        <Route exact path="/:id" render={() => <ArtistEditPage />} />
      </Switch>
    </div>
  );
};
export default withRouter(Routes);
