export class Users {
    id:string = ''
    userName:string = '';
    password:string = '';
    firstName:string = '';
    lastName:string = '';
    address:string = '';
    mail:string = '';
    phone:string = '';
    idCard:string = '';
    image : any;
}

export interface UsersInterface {
    id: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    mail: string;
    phone: string;
    idCard: string;
    image: null;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}
