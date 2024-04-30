import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 50 },  // escalar para 50 usuários em 30 segundos
    { duration: '1m', target: 50 },   // manter 50 usuários por 1 minuto
    { duration: '30s', target: 0 },   // reduzir para 0 usuários em 30 segundos
  ],
  thresholds: {
    http_req_duration: ['p(95)<200'], // 95% das requisições devem ser menores que 200ms
  }
};

export default function () {
  let response = http.get('http://localhost:3000/api/usuarios');

  check(response, {
    'é status 200': r => r.status === 200,
    'resposta não está vazia': r => r.body.length > 0,
  });

  sleep(1);
}
