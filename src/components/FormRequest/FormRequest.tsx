import { IPropsForm } from "../../interface";

function FormRequest(props: IPropsForm) {
 return (
  <div>
   <form onSubmit={props.handleSubmit}>
    <input
     type="text"
     value={props.value}
     placeholder="Введите значение"
     onChange={props.onChangeInput}
    />
    <select name="request" value={props.request} onChange={props.onChangeSelect}>
     <option value="user">User</option>
     <option value="repo">Repo</option>
    </select>
    <input type="submit" value="Отправить" />
   </form>
  </div>
 );
}

export default FormRequest;