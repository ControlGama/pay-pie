import { CardLogin } from "../containers/CardLogin";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LoginButton";

import pageStyles from "../../styles/pages.module.css";

export default function page() {
  return (
    <CardLogin>
        <h2>¡Registrate!</h2>
        <form className={pageStyles.loginform}>
            <LoginInput
              name={"Correo: "}
              type={"text"}
              icon={
                <svg
                  fill="#2A2A72"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path>
                  </g>
                </svg>
              }
            />
            <LoginInput
              name={"Contraseña: "}
              type={"password"}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M8.18164 10.7027C8.18164 10.7027 8.18168 8.13513 8.18164 6.59459C8.1816 4.74571 9.70861 3 11.9998 3C14.291 3 15.8179 4.74571 15.8179 6.59459C15.8179 8.13513 15.8179 10.7027 15.8179 10.7027"
                      stroke="#2A2A72"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.50005 11.3932C4.50001 13.1319 4.49995 16.764 4.50007 19.1988C4.5002 21.8911 8.66375 22.5 12.0001 22.5C15.3364 22.5 19.5 21.8911 19.5 19.1988L19.5 11.3932C19.5 10.8409 19.0523 10.3957 18.5 10.3957H5.50004C4.94777 10.3957 4.50006 10.8409 4.50005 11.3932ZM10.5 16.0028C10.5 16.4788 10.7069 16.9065 11.0357 17.2008V18.7529C11.0357 19.3051 11.4834 19.7529 12.0357 19.7529H12.1786C12.7309 19.7529 13.1786 19.3051 13.1786 18.7529V17.2008C13.5074 16.9065 13.7143 16.4788 13.7143 16.0028C13.7143 15.1152 12.9948 14.3957 12.1072 14.3957C11.2195 14.3957 10.5 15.1152 10.5 16.0028Z"
                      fill="#2A2A72"
                    ></path>{" "}
                  </g>
                </svg>
              }
            />
            <LoginInput
              name={"Confirmar contraseña: "}
              type={"password"}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M8.18164 10.7027C8.18164 10.7027 8.18168 8.13513 8.18164 6.59459C8.1816 4.74571 9.70861 3 11.9998 3C14.291 3 15.8179 4.74571 15.8179 6.59459C15.8179 8.13513 15.8179 10.7027 15.8179 10.7027"
                      stroke="#2A2A72"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.50005 11.3932C4.50001 13.1319 4.49995 16.764 4.50007 19.1988C4.5002 21.8911 8.66375 22.5 12.0001 22.5C15.3364 22.5 19.5 21.8911 19.5 19.1988L19.5 11.3932C19.5 10.8409 19.0523 10.3957 18.5 10.3957H5.50004C4.94777 10.3957 4.50006 10.8409 4.50005 11.3932ZM10.5 16.0028C10.5 16.4788 10.7069 16.9065 11.0357 17.2008V18.7529C11.0357 19.3051 11.4834 19.7529 12.0357 19.7529H12.1786C12.7309 19.7529 13.1786 19.3051 13.1786 18.7529V17.2008C13.5074 16.9065 13.7143 16.4788 13.7143 16.0028C13.7143 15.1152 12.9948 14.3957 12.1072 14.3957C11.2195 14.3957 10.5 15.1152 10.5 16.0028Z"
                      fill="#2A2A72"
                    ></path>{" "}
                  </g>
                </svg>
              }
            />
        </form>
          <div className={pageStyles.loginloginbottom__elements}>
            <form action="" className={pageStyles.loginlogincheckbox__container}>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Acepto los <a href="/signup">términos y condiciones</a></label>
            </form>
            <LoginButton text={"Iniciar sesión"} />
            <p className={pageStyles.loginloginregister__text}>
              ¿Ya tienes cuenta? <a href="/login">Inicia aquí</a>
            </p>
          </div>
    </CardLogin>
  );
}
