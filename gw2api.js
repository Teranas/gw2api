/**
 * Provides static functions to interact with the official Guild Wars 2 API.
 *
 * @namespace GW2API
 *
 * @author {@link http://www.teranas.de Niklas "Teranas" Siepmann}
 * @see https://wiki.guildwars2.com/wiki/API:Main
 */
GW2API =
{
    /**
     * The current max page size.
     *
     * @type {int}
     * @static
     */
    MAX_PAGE_SIZE: 200,

    /**
     * The current default page size.
     *
     * @type {int}
     * @static
     */
    DEFAULT_PAGE_SIZE: 50,

    /**
     * The current base url of the api.
     *
     * @type {string}
     * @static
     */
    BASE_URL: 'https://api.guildwars2.com',

    /**
     * The current version of the api.
     *
     * @type {string}
     * @static
     */
    API_VERSION: 'v2',

    /**
     * Returns the current build of the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/build
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getBuild: function (options)
    {
        return GW2API.apiCall('build', options);
    },

    /**
     * Returns information about the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/tokeninfo
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getTokenInfo: function (options)
    {
        return GW2API.apiCall('tokeninfo', options);
    },

    /**
     * Returns information about the account associated with the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/account
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getAccount: function (options)
    {
        return GW2API.apiCall('account', options);
    },

    /**
     * Returns information about the bank of the account with the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/account/bank
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getAccountBank: function (options)
    {
        return GW2API.apiCall('account/bank', options);
    },

    /**
     * Returns information about the unlocked dyes of the account with the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/account/dyes
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getAccountDyes: function (options)
    {
        return GW2API.apiCall('account/dyes', options);
    },

    /**
     * Returns information about the materials of the account with the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/account/materials
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getAccountMaterials: function (options)
    {
        return GW2API.apiCall('account/materials', options);
    },

    /**
     * Returns information about the unlocked skins of the account with the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/account/skins
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getAccountSkins: function (options)
    {
        return GW2API.apiCall('account/skins', options);
    },

    /**
     * Returns information about the wallet of the account with the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/account/wallet
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getAccountWallet: function (options)
    {
        return GW2API.apiCall('account/wallet', options);
    },

    /**
     * Returns information about all or a specific character of the account associated with the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/characters
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getCharacters: function (options)
    {
        return GW2API.apiCall('characters', options);
    },

    /**
     * Returns information about the inventory of a specific character of the account associated with the given key.
     *
     * This endpoint allows only one id (= character name) other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/characters/inventory
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getCharacterInventory: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('characters/' + ids + "/inventory", options);
    },

    /**
     * Returns information about the equipment of a specific character of the account associated with the given key.
     *
     * This endpoint allows only one id (= character name) other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/characters/equipment
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getCharacterEquipment: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('characters/' + ids + "/equipment", options);
    },

    /**
     * Returns information about the unlocked recipes of a specific character of the account associated with the given
     * key.
     *
     * This endpoint allows only one id (= character name) other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/characters/recipes
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getCharacterRecipes: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('characters/' + ids + "/recipes", options);
    },

    /**
     * Returns information about the specializations of a specific character of the account associated with the given
     * key.
     *
     * This endpoint allows only one id (= character name) other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/characters/specializations
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getCharacterSpecializations: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('characters/' + ids + "/specializations", options);
    },

    /**
     * Returns information about all available colors in the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/colors
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getColors: function (options)
    {
        return GW2API.apiCall('colors', options);
    },

    /**
     * Returns information about the current gem to coin exchange rate and vice versa.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/commerce/exchange
     *
     * @param {string} type - The type of the requested exchange rate. Either <i>coins</i> or <i>gems</i>.
     * @param {int} quantity - The requested quantity of the source currency.
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getCommerceExchange: function (type, quantity, options)
    {
        if (type !== 'coins' && type !== 'gems')
            throw new Meteor.Error(0, "Endpoint /commerce/exchange requires either type 'coins' or 'gems'.");

        if (!quantity)
            throw new Meteor.Error(0, "Endpoint /commerce/exchange requires a quantity attribute.");

        options['quantity'] = quantity;

        return GW2API.apiCall('commerce/exchange' + type, options);
    },

    /**
     * Returns information about the current listings on the trading post.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/commerce/listings
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getCommerceListings: function (options)
    {
        return GW2API.apiCall('commerce/listings', options);
    },

    /**
     * Returns aggregated information about the current listings on the trading post.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/commerce/prices
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getCommercePrices: function (options)
    {
        return GW2API.apiCall('commerce/listings', options);
    },

    /**
     * Returns information about the buy and sell transactions of the account associated with the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/commerce/transactions
     *
     * @param {string} scope - The requested scope. Either <i>history</is> or <i>current</i>.
     * @param {string} type - The transaction type. Either <i>sells</i> or <i>buys</i>.
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getCommerceTransactions: function (scope, type, options)
    {
        if (scope !== 'history' && scope !== 'current')
            throw new Meteor.Error(0, "Endpoint /commerce/transactions requires either scope 'history' or 'current'.");

        if (type !== 'sells' && type !== 'buys')
            throw new Meteor.Error(0, "Endpoint /commerce/transactions requires either type 'sells' or 'buys'.");

        return GW2API.apiCall('commerce/transactions/' + scope + '/' + type, options);
    },

    /**
     * Returns information about the continents of Tyria.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/continents
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getContinents: function (options)
    {
        return GW2API.apiCall('continents', options);
    },

    /**
     * Returns information about the available currencies in the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/currencies
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getCurrencies: function (options)
    {
        return GW2API.apiCall('currencies', options);
    },

    /**
     * Returns information about the events in the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/events
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getEvents: function (options)
    {
        return GW2API.apiCall('events', options);
    },

    /**
     * Returns information about the current state of events in the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/events-state
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getEventsState: function (options)
    {
        return GW2API.apiCall('events-state', options);
    },

    /**
     * Returns URLs that points to resources at render.guildwars2.com for selected icons and files.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/files
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getFiles: function (options)
    {
        return GW2API.apiCall('files', options);
    },

    /**
     * Returns information about a specific guild.
     *
     * This endpoint allows only one id. Other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/guild
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getGuild: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('guild/' + ids, options);
    },

    /**
     * Returns information about the inventory of a specific guild.
     *
     * This endpoint allows only one id. Other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/guild/inventory
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getGuildInventory: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('guild/' + ids + '/inventory', options);
    },

    /**
     * Returns information about the log of a specific guild.
     *
     * This endpoint allows only one id. Other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/guild/log
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getGuildLog: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('guild/' + ids + '/log', options);
    },

    /**
     * Returns information about the roster of a specific guild.
     *
     * This endpoint allows only one id. Other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/guild/members
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getGuildMembers: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('guild/' + ids + '/members', options);
    },

    /**
     * Returns information about the ranks of a specific guild.
     *
     * This endpoint allows only one id. Other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/guild/ranks
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getGuildRanks: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('guild/' + ids + '/ranks', options);
    },

    /**
     * Returns information about the permissions of a specific guild.
     *
     * This endpoint allows only one id. Other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/guild/permissions
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getGuildPermissions: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('guild/' + ids + '/permissions', options);
    },

    /**
     * Returns information about the upgrades of a specific guild.
     *
     * This endpoint allows only one id. Other ids will be omitted.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/guild/upgrades
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getGuildUpgrades: function (options)
    {
        var ids = firstID(options);

        delete options['ids'];

        return GW2API.apiCall('guild/' + ids + '/upgrades', options);
    },

    /**
     * Returns information about items available in the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/items
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getItems: function (options)
    {
        return GW2API.apiCall('items', options);
    },


    /**
     * Returns information from the leaderboards.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/leaderboards
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getLeaderBoards: function (options)
    {
        return GW2API.apiCall('leaderboards', options);
    },

    /**
     * Returns information about the maps of the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/maps
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getMaps: function (options)
    {
        return GW2API.apiCall('maps', options);
    },

    /**
     * Returns information about the materials section of the account bank.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/materials
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getMaterials: function (options)
    {
        return GW2API.apiCall('materials', options);
    },

    /**
     * Returns information about the pvp stats of the account associated with the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/pvp/stats
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getPvPStats: function (options)
    {
        return GW2API.apiCall('pvp/stats', options);
    },

    /**
     * Returns information about the pvp games of the account associated with the given key.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/pvp/games
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getPvPGames: function (options)
    {
        return GW2API.apiCall('pvp/games', options);
    },

    /**
     * LOL.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/quaggans
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getQuaggans: function (options)
    {
        return GW2API.apiCall('quaggans', options);
    },

    /**
     * Returns information about crafting recipes in the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/recipes
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getRecipes: function (options)
    {
        return GW2API.apiCall('recipes', options);
    },

    /**
     * Returns information ids of crafting recipes with the involved input or output material specified by parameters.
     *
     * <b>IMPORTANT:</b> It's not possible to provide multiple ids nor setting both output and output.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/recipes/search
     *
     * @param {int} input - The id of an input item.
     * @param {int} output - The id of an output item.
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    searchRecipes: function (input, output, options)
    {
        if ((input && output) || (options['input'] && options['output']))
        {
            throw new Meteor.Error(0, "You cannot set both input and output. Define one and set the other to null," +
                " false or undefined.");
        }
        else if (input && !options['output'])
        {
            options['input'] = input;
        }
        else if (output && !options['input'])
        {
            options['output'] = output;
        }
        else
        {
            throw new Meteor.Error(0, "You must provide either input or input.");
        }

        return GW2API.apiCall('recipes/search', options);
    },

    /**
     * Returns information about item skins in the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/skins
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getSkins: function (options)
    {
        return GW2API.apiCall('skins', options);
    },

    /**
     * Returns information about skills and spells in the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/skills
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getSkills: function (options)
    {
        return GW2API.apiCall('skills', options);
    },

    /**
     * Returns information about specializations of the main professions in the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/specializations
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getSpecializations: function (options)
    {
        return GW2API.apiCall('specializations', options);
    },

    /**
     * Returns information about traits in the game.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/traits
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getTraits: function (options)
    {
        return GW2API.apiCall('traits', options);
    },

    /**
     * Returns information about traits in the game in its beta status.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/traits-beta
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getTraitsBeta: function (options)
    {
        return GW2API.apiCall('traits-beta', options);
    },

    /**
     * Returns information about the available server worlds.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/worlds
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getWorlds: function (options)
    {
        return GW2API.apiCall('worlds', options);
    },

    /**
     * Returns information about the current World versus World matches.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/wvw/matches
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getWvWMatches: function (options)
    {
        return GW2API.apiCall('wvw/matches', options);
    },

    /**
     * Returns information about the status of objectives in current World versus World matches.
     *
     * @see http://wiki.guildwars2.com/wiki/API:2/wvw/objectives
     *
     * @param {object} [options] - See {@link GW2API.apiCall}
     *
     * @throws Meteor.Error
     */
    getWvWObjectives: function (options)
    {
        return GW2API.apiCall('wvw/matches', options);
    },

    /**
     * Prepares and sends a raw request to the api server.
     *
     * @param {string} endpoint - The requested endpoint.
     * @param {object} options - The option object. Possible parameters:
     * @param {int} options.callback - Required on client side.
     * @param {(string|int|int[]|string[])} options.ids - The requested ids. Not available on endpoints without id in
     *  its result set. Either an array of ids or a comma-separated list of ids or a single id. Depending on the
     *  endpoint, it's also possible to provide alphanumerical ids such as GUIDs.
     * @param {int} options.pageIndex - Will request a specific page of a result set for endpoints with bulk enabled
     *  requests.
     * @param {int} options.pageSize - The size of the requested pages. Needs to be set with <b>options.pageIndex</b>.
     * @param {string} options.key - The authentication key that grants access to the requested endpoint. Only
     *  needed for authenticated endpoints.
     * @param {string} options.language - Only available for endpoints with language awareness. Defines the
     *  requested language. The API server will return the language that your browser provides when language is
     *     omitted.
     * @param {int} options.quantity - Only available for endpoint v2/commerce/exchange. See {@link
        *     GW2API.getCommerceExchange}.
     * @param {int} options.input - Only available for endpoint v2/recipes/search. See {@link GW2API.searchRecipes}.
     * @param {int} options.output - Only available for endpoint v2/recipes/search. See {@link GW2API.searchRecipes}.
     *
     * @return {object} Returns the response object of the HTTP request.
     *
     * @throws Meteor.Error
     */
    apiCall: function (endpoint, options)
    {
        if (!endpoint) throw new Meteor.Error(0, 'No endpoint set.');

        if (options)
        {
            var queryParameters = {};

            if (options['ids'])
                queryParameters.ids = typeof options['ids'] === 'array' ? options['ids'].join(',') : options['ids'];

            if (options['pageIndex'] && options['pageIndex'] >= 0)
                queryParameters['page'] = options['pageIndex'];

            if (options['pageSize'] && options['pageSize'] <= GW2API.MAX_PAGE_SIZE)
                queryParameters['page_size'] = options['pageSize'];

            if (options['key'])
                queryParameters['access_token'] = options['key'];

            if (options['language'])
                queryParameters['lang'] = options['language'];

            /* Special parameters for certain endpoints */

            if (options['quantity'] && endpoint.indexOf('commerce/exchange') != -1)
                queryParameters.quantity = options['quantity'];

            if (options['input'] && endpoint.indexOf('recipes/search') != -1)
                queryParameters.input = options['input'];

            if (options['output'] && endpoint.indexOf('recipes/search') != -1)
                queryParameters.output = options['output'];
        }

        var requestURL = GW2API.BASE_URL + '/' + GW2API.API_VERSION + '/' + endpoint;

        var asyncCall = Meteor.wrapAsync(httpRequest);

        if (Meteor.isServer)
        {
            return asyncCall();
        }
        else
        {
            if (!options || typeof options['callback'] !== 'function')
                throw new Meteor.Error(0, "GW2API calls need a callback on client side.");

            asyncCall(options['callback']);
        }

        function httpRequest(callback)
        {
            if (Object.keys(queryParameters).length === 0)
            {
                HTTP.get(requestURL, callback);
            }
            else
            {
                HTTP.get(requestURL, {
                    params: queryParameters
                }, callback);
            }
        }
    }
};

/**
 * Returns the first id of a given option object.
 *
 * @param {object} options - See {@link GW2API.apiCall}.
 *
 * @private
 */
firstID = function (options)
{
    if (options['ids'])
    {
        if (typeof options['ids'] === 'array')
        {
            return options['ids'][0];
        }
        else
        {
            return options['ids'];
        }
    }
};