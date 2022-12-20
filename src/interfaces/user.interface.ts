export interface IUser {
    id: number;
    email: string;
    access: boolean;
    lastName: string;
    birthDate: string;
    firstName: string;
}

export interface IChange {
    email: string;
    access: boolean;
    lastName: string;
    birthDate: string;
    firstName: string;
}