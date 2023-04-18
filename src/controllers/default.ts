// default Totaljs controller

// this corresponds to the export.install = function () { ... } totaljs idiom

export function install() {
  ROUTE("GET /");
  ROUTE("GET /example1",'example1');
  ROUTE("GET /example2", 'example2');
}


