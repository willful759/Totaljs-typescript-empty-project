// default Totaljs controller

// totaljs uses a lot of globals, it is necesary to declare them in typescript first
declare const ROUTE: Function;

// this corresponds to the export.install = function () { ... } totaljs idiom
export function install() {
  ROUTE("GET /");
  ROUTE("GET /example1", "example1");
  ROUTE("GET /example2", "example2");
}


