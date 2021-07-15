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
export const goToProfile = (history, id) => {
  history.push(`/perfil/${id}`)
}
export const goToAlbum= (history) => {
  history.push(`/albums`)
}
export const goToBack = (history) => {
  history.goBack();
};
