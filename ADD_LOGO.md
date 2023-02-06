# How to add new logo
Please follow these steps to add your logo to [Falco landing page](https://falco.org/):
1. Fork [Falco](https://github.com/falcosecurity/falco-website) repository
2. Add your logo in png to
   the [static/img/adopters](https://github.com/falcosecurity/falco-website/tree/master/static/img/adopters)
   folder.
3. Add info with your logo to [params file](https://github.com/falcosecurity/falco-website/blob/master/config/_default/params.toml) after the ```#Used by Adopters``` header with template below

```
[[adopters.used-by]]
src = "your_logo_name.png "
alt = "alt tag decription"
url = "link to the project"
```
4. Create pull request to the Falco repository with your changes
