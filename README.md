# teranas:gw2api

This package provides a simple wrapper for most of the current and upcoming Guild Wars 2 API endpoints.

It's supporting bulk requests, paged requests and language control.

View the docs at https://teranas.github.io/gw2api.

## Table of Contents

- [Installation](#installation)
- [Function calls](#function-calls)
- [The result object](#the-result-object)
- [Example](#example)
  - [getBuild()](#getbuild)
    - [Server side](#server-side)
    - [Client side](#client-side)
    - [Result](#result)
  - [getColors()](#getcolors)
    - [Server side](#server-side-1)
    - [Client side](#client-side-1)
    - [Result](#result-1)
- [Special functions](#special-functions)
  - [getCommerceExchange(type, quantity, options)](#getcommerceexchangetype-quantity-options)
  - [searchRecipes(input, output, options)](#searchrecipesinput-output-options)
- [Making custom requests](#making-custom-requests)
- [Error handling](#error-handling)
- [Supported endpoints](#supported-endpoints)

## Installation

Simply run the following command inside your meteor project:

`meteor add teranas:gw2api`

You can now start using the API by calling functions of the global `GW2API` object.

## Function calls

All functions will accept two parameters at least. The first can be an ``options`` object, the second can be an asynchronous callback function. The callback function is required on client side but optional on server side.

The ``option`` object is optional but required for some functionality of the API. It can have the following keys:

**key** *string* (authenticated endpoints)

The key parameter is required for authenticated requests. You have to provide a valid API access token with the correct scopes to request certain information. 

**ids** *int, string, string[] or int[]* (optional)

You can set either one, multiple or no id, depending on the endpoint you want to request information from. 
*Note: You can only provide one id for all sub endpoints of the `character` endpoint.*

**pageIndex** *int* (optional, supported endpoints)
 
The pageIndex parameter can be set to force a paged output of the requested data. Index starts with `0`. The size of the page will be `50` items by default.

**pageSize** *int* (optional, supported endpoints)

The pageSize parameter can be set to define the limit of items returned per page.
There's a max limit of 200 items on api side.

**language** *string* (optional, supported endpoints)

Overrides the output language with the provided two character language code. The API server tries to determine the correct language when requesting from client side but falls back to english by default.

## The result object

Calling any `GW2API` function from server side will return the result object directly. On client side is the exact same object stored within the second parameter of your callback function.

See the official [HTTP.call()](http://docs.meteor.com/#/full/http_call) documentation for details about the result object.

## Examples

### getBuild()

Let's write a basic example:

#### Server side

```
console.log( GW2API.getBuild() );
```

#### Client side

```
function printResult(error, result)
{
  console.log(result);
}

GW2API.getBuild(printResult);
```

#### Result

```
{
    statusCode: 200,
    content: '{"id":53120}',
    headers: {
        'content-length': '12',
        'content-type': 'application/json; charset=utf-8',
        server: 'Microsoft-IIS/7.5',
        'access-control-allow-origin': '*',
        'x-content-type-options': 'nosniff',
        date: 'Fri, 18 Sep 2015 22:37:57 GMT'
    },
    data: {
        id: 53120
    }
}
```

### getColors()

A slightly advanced example:

#### Server side

```
console.log( GW2API.getColors({
  pageIndex: 0,
  pageSize: 2,
  language: 'de'
}) );
```

#### Client side

```
function printResult(error, result)
{
  console.log(result);
}

GW2API.getBuild({
  pageIndex: 0,
  pageSize: 5,
  language: 'de'
}, printResult);
```

#### Result

```
{
    statusCode: 200,
    content: '[{"id":1,"name":"Farbentferner","base_rgb":[128,26,26],"cloth":{"brightness":15,"contrast":1.25,"hue":38,"saturation":0.28125,"lightness":1.44531,"rgb":[124,108,83]},"leather":{"brightness":-8,"contrast":1,"hue":34,"saturation":0.3125,"lightness":1.09375,"rgb":[65,49,29]},"metal":{"brightness":5,"contrast":1.05469,"hue":38,"saturation":0.101563,"lightness":1.36719,"rgb":[96,91,83]}},{"id":2,"name":"Schwarz","base_rgb":[128,26,26],"cloth":{"brightness":-13,"contrast":1,"hue":275,"saturation":0.0234375,"lightness":1.09375,"rgb":[37,35,38]},"leather":{"brightness":-13,"contrast":1,"hue":275,"saturation":0.0234375,"lightness":1.09375,"rgb":[37,35,38]},"metal":{"brightness":-13,"contrast":1,"hue":275,"saturation":0.0234375,"lightness":1.09375,"rgb":[37,35,38]}}]',
    headers: {
        ...
        'content-language': 'de',
        'x-page-total': '240',
        'x-page-size': '2',
        'x-result-total': '480',
        'x-result-count': '2',
        ...
    },
    data: [{
        id: 1,
        name: 'Farbentferner',
        base_rgb: [Object],
        cloth: [Object],
        leather: [Object],
        metal: [Object]
    }, {
        id: 2,
        name: 'Schwarz',
        base_rgb: [Object],
        cloth: [Object],
        leather: [Object],
        metal: [Object]
    }]
}
```

Have a look at the `headers` object. It contains some additional information such as `x-page-total` which can be used to iterate over all available pages.

## Special functions

There are some functions that accept additional parameters:

### getCommerceExchange(type, quantity, options)

The ``getCommerceExchange(type, quantity, options)`` function accepts additional parameters:

1. ``type`` *string* - Either 'coins' or 'gems'. Specifies the source currency.
2. ``quantity`` *int* - The quantity of the source currency.

### searchRecipes(input, output, options)

The ``searchRecipes(input, output, options)`` function accepts additional parameters:

1. ``input`` *int* - The id of an input item.
2. ``output`` *int* - The id of an output item.

*Note: It's not possible to provide multiple IDs. It's also not possible to provide both, input and output ids.*

## Making custom requests

The ``GW2API`` object provides a function called ``apiCall(endpoint, options, callback)`` which is internally called by all functions.

The ``endpoint`` parameter specifies the endpoint relative to the API v2 base url. That's currently ``https://api.guildwars2.com/v2/``.

See [Function calls](#function-calls) for details about the second parameter.

Please note: It's currently not possible to append custom HTTP request parameters.

## Error handling

The API supports built in error handling as of version *1.0.3*. You can set a custom error handler function by calling ``GW2API.setErrorHandler()`` with a single argument.

This error handler will catch any error thrown by ``HTTP.call()``. Depending on the thrown error, the error object may contain a key ``response`` that can be used to analyse any API error that's not a network error. This object will contain the same content as if the request was successful. That meaning the response object will contain keys like ``statusCode`` and ``data``.

**Important:**

By design of the API, the server may respond with a HTTP-ErrorCode if you made a malformed request or provided invalid parameters. The API responds with a JSON-Object in most cases. This object will store a value ``text`` that describes the error. You can access this value like this: ``var apiError = error.response.data.text``.

## Supported endpoints

Please visit the official [Guild Wars 2 Wiki](https://wiki.guildwars2.com/wiki/API:Main) for details about the endpoints and their features (pagination, bulk and language awareness).

Endpoint                       | Function     | Note
---                            | ---          | ---     
account                        | getAccount() |
account/bank                   | getAccountBank() |
account/dyes                   | getAccountDyes() |
account/materials              | getAccountMaterials() |
account/skins                  | getAccountSkins() |
account/wallet                 | getAccountWallet() |
achievements                   | *not implemented* | Unpublished endpoint
build                          | getBuild() | 
characters                     | getCharacters() | 
characters/:id/equipment       | getCharacterEquipment() |
characters/:id/inventory       | getCharacterInventory() | 
characters/:id/recipes         | getCharacterRecipes() | Unpublished endpoint
characters/:id/specializations | getCharacterSpecializations() |
colors                         | getColors() | 
commerce/exchange              | getCommerceExchange() | See [special functions](#special-functions)
commerce/listings              | getCommerceListings() |
commerce/prices                | getCommercePrices() | 
commerce/transactions          | getCommerceTransactions() | 
continents                     | getContinents() |
currencies                     | getCurrencies() |
events                         | getEvents() | Unpublished endpoint
events-state                   | getEventsState() | Unpublished endpoint
files                          | getFiles() |
guild/:id                      | getGuild() | Unpublished endpoint
guild/:id/inventory            | getGuildInventory()| Unpublished endpoint
guild/:id/log                  | getGuildLog()| Unpublished endpoint
guild/:id/members              | getGuildMembers()| Unpublished endpoint
guild/:id/ranks                | getGuildRanks()| Unpublished endpoint
guild/permissions              | getGuildPermissions()| Unpublished endpoint
guild/upgrades                 | getGuildUpgrades()| Unpublished endpoint
items                          | getItems() |
leaderboards                   | getLeaderBoards() | Unpublished endpoint
maps                           | getMaps() |
materials                      | getMaterials() |
pvp                            | *not implemented* | Implementation not necessary cause it only returns ``[games, stats]``
pvp/games                      | getPvPGames() |
pvp/stats                      | getPvPStats() |
quaggans                       | getQuaggans() |
recipes                        | getRecipes() |
recipes/search                 | searchRecipes() | See [special functions](#special-functions)
skills                         | getSkills() | Unpublished endpoint
skins                          | getSkins() |
specializations                | getSpecialzation() |
tokeninfo                      | getTokenInfo() |
traits                         | getTraits() |
traits-beta                    | getTraitsBeta() |
worlds                         | getWorlds() |
wvw/matches                    | getWvWMatches() | Unpublished endpoint
wvw/objectives                 | getWvWObjectives() | 