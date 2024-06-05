import { IPropsRepoResponse } from '../../interface';

function Repo({ data }: IPropsRepoResponse) {
    console.log(data);
 return (
    <div>
    <p>Репозиторий:</p>
    <p>Название: {data.full_name}</p>
    <p>Количество звезд: {data.stargazers_count}</p>
</div>
 );
}

export default Repo;
