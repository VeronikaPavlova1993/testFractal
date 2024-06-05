import { IPropsUserResponse, IUser} from '../../interface';
 
function User(props: IPropsUserResponse) {
 return (
  <div>
   <p>Пользователь:</p>
   <p>Имя: {(props.data as IUser).name}</p>
   <p>
    Количество публичных репозиториев:
    {(props.data as IUser).public_repos}
   </p>
  </div>
 );
}

export default User;
