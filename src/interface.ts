export interface IPropsForm {
 request: 'user' | 'repo';
 value: string;
 onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
 onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
 handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export interface IUser {
 name: string;
 public_repos: number;
}
export interface IRepo {
 full_name: string;
 stargazers_count: number;
}

export interface IPropsUserResponse {
 data: IUser;
}

export interface IPropsRepoResponse {
 data: IRepo;
}
