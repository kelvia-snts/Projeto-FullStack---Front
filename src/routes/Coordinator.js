export const goToLogin = (history) => {
  history.push("/login")
}
export const goToSignup = (history) => {
  history.push("/cadastro")
}
export const goToHome = (history) => {
  history.push("/")
}
export const goToAddMusic = (history) => {
  history.push("/adicionar-música")
}
export const goToMusicDetail = (history, id) => {
  history.push(`/detalhe/${id}`)
}
export const goToBack = (history) => {
  history.goBack();
};
