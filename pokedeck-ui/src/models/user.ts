export class User {
    userAuthId: number;
    username: string;
    userRoleId: string;
    
    constructor(id: number, un: string, roleid: string) {
        this.userAuthId = id;
        this.username = un;
        this.userRoleId = roleid;
    }
}