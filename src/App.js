// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/signup';
import { Home } from './pages/home';
import { Homepage } from './components/home';
import { Dashboard } from './components/dashboard';
import { Userprofile } from './components/user_profile';
import { Booking } from './components/booking';
import { Ticketbookingform } from './pages/ticket_booking_form';
import { Bookingform } from './pages/booking_form';
import { Movieupload } from './admin/movie_upload';
import { Feedback } from './pages/feedback_page';
import { MovieDetails } from './pages/movie_details';
import { Successresponse } from './response/success_response';
import { Adminpage } from './admin/admin_page';
import { Retrievefeedback } from './admin/retrieve_feedback';
import { Adminprofile } from './admin/admin_profile';
import { AdminBooking } from './admin/admin_booking';
import ChangePassword from './components/changepassword'; // Import the new component

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/bookings" component={Booking} />
          <Route exact path="/userprofile" component={Userprofile} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/bookingform" component={Bookingform} />
          <Route exact path="/pickceat" component={Ticketbookingform} />
          <Route exact path="/movieupload" component={Movieupload} />
          <Route exact path="/details" component={MovieDetails} />
          <Route exact path="/success" component={Successresponse} />
          <Route exact path="/adminpage" component={Adminpage} />
          <Route exact path="/retrievefeedback" component={Retrievefeedback} />
          <Route exact path="/adminprofile" component={Adminprofile} />
          <Route exact path="/adminbooking" component={AdminBooking} />
          <Route exact path="/changepassword" component={ChangePassword} /> {/* Add the new route */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
