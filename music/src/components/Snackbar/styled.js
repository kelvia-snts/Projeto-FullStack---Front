import styled from "styled-components";

import Snackbar from "@material-ui/core/Snackbar";

export const SnackbarSuccess = styled(Snackbar)`
  background-color: #020024;
  * {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`;
export const SnackbarError = styled(Snackbar)`
  background-color: #020024 ;
  * {
    background-color: #020024 !important;
  }
`;