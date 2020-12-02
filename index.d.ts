/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

///////////////////////////////////////////////////////////////////////
/// NOTE: types folder is generated by `npm run prepublish` command ///
/// Make sure run it before edit this file.                         ///
///////////////////////////////////////////////////////////////////////
// Restrict exports
export {
    init, connect, disConnect, dispose, getInstanceByDom, getInstanceById,
    registerMap, registerLocale, getMap, registerTheme
} from './types/src/export';

export {useSimple as use} from './types/src/extension';

export {EChartsFullOption as EChartsOption} from './types/src/option';