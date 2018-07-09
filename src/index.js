import jwtDecode from 'jwt-decode';

export default function install(Vue, options) {

    Vue.auth = {
        setToken(token) {
            localStorage.setItem('auth.token', token);
        },

        token() {
            return localStorage.getItem('auth.token');
        },

        removeToken() {
            localStorage.removeItem('auth.token');
        },

        hasToken() {
            return this.token() !== null;
        },

        setUser(user) {
            localStorage.setItem('auth.user', JSON.stringify(user));
        },

        user() {
            return JSON.parse(localStorage.getItem('auth.user'));
        },

        check() {
            if (this.hasToken()) {
                try {
                    let jwt = jwtDecode(this.token());

                    if (
                        typeof jwt.exp === undefined
                        || (new Date() / 1000) < jwt.exp
                    ) {
                        return true;
                    }
                } catch (error) {
                    this.removeToken();
                }
            }

            return false;
        }
    };

    Object.defineProperty(Vue.prototype, '$auth', {
        get() {
            return Vue.auth;
        }
    });

}
