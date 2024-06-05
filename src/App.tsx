import axios from 'axios';
import './App.css';
import FormRequest from './components/FormRequest/FormRequest';
import React from 'react';
import { IRepo, IUser } from './interface';
import User from './components/User/User';
import Repo from './components/Repo/Repo';

// ЗАДАЧА:
// Создать мини-приложение, где есть форма, в которой
// текстовый инпут и селект.
// Из селекта можно выбрать тип: "user" или "repo".
//
// В зависимости от того, что выбрано в селекте,
// при отправке формы приложение делает запрос
// на один из следующих эндпоинтов:
//
// https://api.github.com/users/${nickname}
// пример значений: defunkt, ktsn, jjenzz, ChALkeR, Haroenv
//
// https://api.github.com/repos/${repo}
// пример значений: nodejs/node, radix-ui/primitives, sveltejs/svelte
//
// после чего, в списке ниже выводится полученная информация;
// - если это юзер, то его full name и число репозиториев;
// - если это репозиторий, то его название и число звезд.

// ТРЕБОВАНИЯ К ВЫПОЛНЕНИЮ:
// - Типизация всех элементов.
// - Выполнение всего задания в одном файле App.tsx, НО с дроблением на компоненты.
// - Стилизовать или использовать UI-киты не нужно. В задаче важно правильно выстроить логику и смоделировать данные.
// - Задание требуется выполнить максимально правильным образом, как если бы вам нужно было, чтобы оно прошло код ревью и попало в продакшн.

// Все вопросы по заданию и результаты его выполнения присылать сюда - https://t.me/temamint

function App() {
 const [request, setRequest] = React.useState<'user' | 'repo'>('user');
 const [value, setValue] = React.useState<string>('');
 const [data, setData] = React.useState<IUser | IRepo | null>(null);
 const [error, setError] = React.useState<string>('');

 function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
  setValue(e.target.value);
 }

 function onChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
  setRequest(e.target.value as 'user' | 'repo');
 }

 async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  try {
   if (request === 'user') {
    const response = await axios.get<IUser>(
     `https://api.github.com/users/${value}`
    );
    setData(response.data);
    setError('');
   } else {
    const response = await axios.get<IRepo>(
     `https://api.github.com/repos/${value}`
    );
    setData(response.data);
    setError('');
   }
  } catch (err) {
   setError('Произошла ошибка. Пожалуйста, повторите запрос');
   setData(null);
  }
 }

 return (
  <>
   <h2>Тестовое задание</h2>
   <FormRequest
    onChangeInput={onChangeInput}
    onChangeSelect={onChangeSelect}
    handleSubmit={handleSubmit}
    value={value}
    request={request}
   />

   {request === 'user' && data && <User data={data as IUser} />}

   {request === 'repo' && data && <Repo data={data as IRepo} />}

   {error !== '' && <div>{error}</div>}
  </>
 );
}

export default App;
