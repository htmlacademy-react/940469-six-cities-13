import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks';
import { FormEvent, useRef } from 'react';
import { Authorization } from '../../const';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../store/api-action';
import {Link} from 'react-router-dom';

function Login(): JSX.Element {
  const password = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (email.current !== null && password.current !== null) {
      dispatch(
        loginAction({
          email: email.current.value,
          password: password.current.value,
        }),
      );
      navigate(Authorization.Main);
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities | Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="src/components/login#"
              method="post"
              onSubmit={handleLoginSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={email}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={password}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="src/components/login#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
