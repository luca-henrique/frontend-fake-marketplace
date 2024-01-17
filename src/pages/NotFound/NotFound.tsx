import { useRouteError } from "react-router-dom";

type ErroRouterType = { message: string, statusText: string }

export default function NotFound() {
  
  //@ts-expect-error: Unknow type
  const error: ErroRouterType = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>404.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}