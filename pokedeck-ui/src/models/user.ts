export class User {
    userAuthId: number | undefined;
    username: string;
    userAuthRole: number;
    
    constructor(id: number, un: string, roleid: number) {
        this.userAuthId = id;
        this.username = un;
        this.userAuthRole = roleid;
    }
}