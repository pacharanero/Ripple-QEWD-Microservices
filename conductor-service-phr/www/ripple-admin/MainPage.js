/*

 ----------------------------------------------------------------------------
 | ripple-admin: Ripple User Administration MicroService                    |
 |                                                                          |
 | Copyright (c) 2018 Ripple Foundation Community Interest Company          |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://rippleosi.org                                                     |
 | Email: code.custodian@rippleosi.org                                      |
 |                                                                          |
 | Author: Rob Tweed, M/Gateway Developments Ltd                            |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  12 June 2018

*/

"use strict"

var React = require('react');
var createReactClass = require('create-react-class');
var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
var ReactBootstrap = require('react-bootstrap');

import { ToastContainer } from "react-toastr"

var {
  Alert,
  Button
} = ReactBootstrap;

var Banner = require('./Banner');
var Content = require('./Content');
var Shutdown = require('./Shutdown');
var NotLoggedIn = require('./NotLoggedIn');
var LoginModal = require('./LoginModal');

var MainPage = createReactClass({

  getInitialState: function() {
    return {
      status: 'checkDoc'
    }
  },

  componentWillMount: function() {
    this.controller = require('./controller-MainPage')(this.props.controller, this);
  },

  render: function() {

     //console.log('status = ' + this.state.status);

     if (this.state.status === 'shutdown') {
       return (
         <Shutdown
          controller = {this.controller}
         />
       );
     }

     if (this.props.status === 'disconnected') {
       console.log('** disconnected!');
       controller.displayError('Your Session has expired');
       return (
         <NotLoggedIn
           title = {this.title} 
         />
       );
     }

     if (this.state.status === 'checkDoc') {
       this.checkAdminDoc();
       return (
         <div>
          <ToastContainer 
            ref="toastContainer"
            className="toast-top-right"
            newestOnTop={true}
            target="body"
          />
         </div>
       );
     }

     if (this.state.status === 'docEmpty') {
       return (
         <div>

           <Banner
             controller = {this.controller}
           />

           <Alert bsStyle="danger" onDismiss={this.startLogin}>
            <h4>This is a brand new system</h4>
            <p>
              No entries exist in the Administration User Login Document on
              the Authentication service.
            </p>
            <p>
              Login using the QEWD Management Password to create an Admin User to get things started.
            </p>
            <p>
              <Button onClick={this.startLogin}>Continue</Button>
            </p>
          </Alert>
         </div>
       );
     }

     return (
      <div>
        <Banner
          controller = {this.controller}
        />

        <ToastContainer 
          ref="toastContainer"
          className="toast-top-right"
          newestOnTop={true}
          target="body"
        />

        <LoginModal
          controller = {this.controller}
          show = {this.showLoginModal}
          hideUsername = {this.hideUsername}
        />

        <Content
          controller = {this.controller}
          status = {this.state.status}
        />

      </div>

    );
  }
});

module.exports = MainPage;
