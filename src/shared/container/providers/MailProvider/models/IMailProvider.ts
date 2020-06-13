import ISendMailDTO from '../dtos/ISandMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
