export class ChatUser{
  ID: string;
  FBProfile?: string; //Bør nok have en anden type, sætter bare string til en start.
  ProfileImgPath: string;
  ChatName: string;
  AuthToken?: string; //Ved ikke om vi får brug for den.
}
