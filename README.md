# Vue Auth

Easy client side authentication for your Vue applications.

## Installation

```bash
npm install @optix/vue-auth --save
```

```javascript
import Vue from 'vue';
import VueAuth from '@optix/vue-auth';

Vue.use(VueAuth);
```

## Usage

Accessing the auth object:

```javascript
// Globally
Vue.auth.token();

// On an instance
this.$auth.token();
```

### Methods

* setToken(token)
* token()
* hasToken()
* removeToken()
* setUser(user)
* user()
* check()

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
