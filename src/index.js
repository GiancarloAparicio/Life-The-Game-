import './styles/index.scss';
import { Hello } from './js/Hello';
import 'bootswatch/dist/cosmo/bootstrap.min.css';

const root = document.querySelector('#root');
const canvas = document.querySelector('canvas');

root.innerHTML = `
	<h1>${Hello()}</h1>
`;

console.log(canvas.height);
console.log(canvas.width);
