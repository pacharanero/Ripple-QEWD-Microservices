/*

 ----------------------------------------------------------------------------
 | qewd-ripple: QEWD-based Middle Tier for Ripple OSI                       |
 |                                                                          |
 | Copyright (c) 2016-18 Ripple Foundation Community Interest Company       |
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

  10 May 2018

*/

/*

Create new feed record

  POST /api/feeds

{
  "author": "ivor.cox@phr.leeds.nhs",
  "name": "BBC News",
  "landingPageUrl": "https://www.bbc.co.uk/news",
  "rssFeedUrl": "https://www.bbc.co.uk/rss",
}

*/

var uuid = require('uuid/v4');
var test = require('valid-url');

function post(args, finished) {

  var email = args.session.email;
  var payload = args.req.body;
  
  if (!payload.author || payload.author === '') {
    return finished({error: 'Author missing or empty'});
  }

  if (!payload.name || payload.name === '') {
    return finished({error: 'Feed name missing or empty'});
  }

  if (!payload.landingPageUrl || payload.landingPageUrl === '') {
    return finished({error: 'Landing page URL missing or empty'});
  }

  if (!test.isWebUri(payload.landingPageUrl)) {
    return finished({error: 'Landing page URL is invalid'});
  }

  if (!payload.rssFeedUrl || payload.rssFeedUrl === '') {
    return finished({error: 'RSS Feed URL missing or empty'});
  }

  if (!test.isWebUri(payload.rssFeedUrl)) {
    return finished({error: 'RSS Feed URL is invalid'});
  }

  // create a sourceId uuid
  var sourceId = uuid();

  payload.email = email;
  payload.sourceId = sourceId;
  payload.dateCreated = new Date().getTime();

  var doc = this.db.use('PHRFeeds');
  doc.$(['byEmail', email, sourceId]).value = 'true';
  doc.$(['bySourceId', sourceId]).setDocument(payload);

  finished({sourceId: sourceId});
}

module.exports = post;
