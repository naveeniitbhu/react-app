import { PublicRequest } from './server-types';

// TODO: Replace below with req.protocol)
function getProtocol(req: PublicRequest): string {
  // let proto: string = req.connection.encrypted ? 'https' : 'http'
  // When it's https, tls is used instead of net, that's why encrypted
  // comes from here (and so encrypted is undefined when it's http,
  // because net doesn't define this property).
  // only do this if you trust the proxy
  // @ts-ignore
  let proto: string = req.socket.encrypted ? 'https' : 'http';

  // The X-Forwarded-Proto (XFP) header is a de-facto standard header
  // for identifying the protocol (HTTP or HTTPS) that a client used to
  // connect to your proxy or load balancer. Your server access logs
  // contain the protocol used between the server and the load balancer,
  // but not the protocol used between the client and the load balancer.
  // To determine the protocol used between the client and the load
  // balancer, the X-Forwarded-Proto request header can be used.

  // only do this if you trust the proxy
  const forwarded = req.headers['x-forwarded-proto'];

  if (forwarded) proto = forwarded.toString();
  // search for all whitespace (\s*) chars followed by ,
  return proto.split(/\s*,\s*/)[0];
}

export function getBaseUrl(req: PublicRequest) {
  // return `${req.protocol}://${req.get('host')}`
  return `${getProtocol(req)}://${req.get('host')}`;
}

export function buildUrl(req: PublicRequest, endpoint: string) {
  return `${getBaseUrl(req)}${endpoint}`;
}
