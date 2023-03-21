import { AxiosResponse, AxiosError } from "axios";

function castError(e: unknown) {
  return e as AxiosError;
}

function getErrorMessage(axiosError: AxiosError): string {
  let message = "";
  switch (axiosError.code) {
    case "ECONNABORTED":
      message = "The request is taking too long to complete.";
      break;
    case "ENOTFOUND":
      message = "The server cannot be reached.";
      break;
    case "ECONNREFUSED":
      message = "The server refused to connect.";
      break;
    default:
      message = "Something went wrong";
      break;
  }
  return message;
}

function getError(e: unknown) {
  const axiosError = castError(e);
  if (axiosError.isAxiosError) {
    return getErrorMessage(axiosError);
  }

  return `${e}`;
}

export { castError, getError };
