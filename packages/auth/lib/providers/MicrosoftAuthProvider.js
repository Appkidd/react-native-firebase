/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const providerId = 'microsoft.com';

export default class MicrosoftAuthProvider {
  constructor() {
    throw new Error('`new MicrosoftAuthProvider()` is not supported on the native Firebase SDKs.');
  }

  static get PROVIDER_ID() {
    return providerId;
  }

  static credential(token, secret) {
    return {
      token,
      secret,
      providerId,
    };
  }
}
