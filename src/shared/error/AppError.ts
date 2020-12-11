class AppErro {
  public readonly code;

  public readonly message;

  constructor(message: string, code = 400) {
    this.message = message;
    this.code = code;
  }
}

export default AppErro;
