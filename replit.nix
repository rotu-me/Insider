{ pkgs, ... }:

{
  deps = [
    (pkgs.nodejs-16_x.override { permittedInsecurePackages = [ "nodejs-16.20.0" ]; })
  ];
}
