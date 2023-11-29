
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const LSCOLORS: string;
	export const SESSION_MANAGER: string;
	export const WINDOWID: string;
	export const ZPLUG_ROOT: string;
	export const COLORTERM: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const XDG_CONFIG_DIRS: string;
	export const LESS: string;
	export const XDG_MENU_PREFIX: string;
	export const TERM_PROGRAM_VERSION: string;
	export const WLR_NO_HARDWARE_CURSORS: string;
	export const _ZPLUG_VERSION: string;
	export const TMUX: string;
	export const _P9K_TTY: string;
	export const FPATH: string;
	export const NODE: string;
	export const ZPLUG_CACHE_DIR: string;
	export const LC_ADDRESS: string;
	export const _ZPLUG_PREZTO: string;
	export const LC_NAME: string;
	export const SSH_AUTH_SOCK: string;
	export const P9K_TTY: string;
	export const XCURSOR_PATH: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const npm_config_local_prefix: string;
	export const _ZPLUG_AWKPATH: string;
	export const ZPLUG_THREADS: string;
	export const ZPLUG_FILTER: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const EDITOR: string;
	export const NAUTILUS_4_EXTENSION_DIR: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const NIX_GSETTINGS_OVERRIDES_DIR: string;
	export const TRACKER_CLI_SUBCOMMANDS_DIR: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const _ZPLUG_URL: string;
	export const NIX_PATH: string;
	export const SYSTEMD_EXEC_PID: string;
	export const NIXPKGS_CONFIG: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const _ZPLUG_OHMYZSH: string;
	export const PERIOD: string;
	export const WINDOWPATH: string;
	export const GDM_LANG: string;
	export const HOME: string;
	export const USERNAME: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const LC_PAPER: string;
	export const NIXOS_OZONE_WL: string;
	export const TMUX_TMPDIR: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const NMV_COMPLETION: string;
	export const npm_package_version: string;
	export const _ZSH_TMUX_FIXED_CONFIG: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const GIO_EXTRA_MODULES: string;
	export const INVOCATION_ID: string;
	export const NVM_LAZY_LOAD: string;
	export const MANAGERPID: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const ALACRITTY_SOCKET: string;
	export const INFOPATH: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const LC_IDENTIFICATION: string;
	export const npm_package_name: string;
	export const XDG_DESKTOP_PORTAL_DIR: string;
	export const GTK_PATH: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const TMUX_PANE: string;
	export const ZPLUG_BIN: string;
	export const ZPLUG_PROTOCOL: string;
	export const TZDIR: string;
	export const ZPLUG_USE_CACHE: string;
	export const DISPLAY: string;
	export const SHLVL: string;
	export const ZPLUG_HOME: string;
	export const __HM_ZSH_SESS_VARS_SOURCED: string;
	export const PAGER: string;
	export const LC_TELEPHONE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const LC_MEASUREMENT: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const ZPLUG_REPOS: string;
	export const LOCALE_ARCHIVE: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const ZPLUG_LOADFILE: string;
	export const GDM_X_SERVER_EXTRA_ARGS: string;
	export const TERMINFO_DIRS: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const ZSH_TMUX_TERM: string;
	export const LC_TIME: string;
	export const npm_package_json: string;
	export const P9K_SSH: string;
	export const _ZPLUG_CONFIG_SUBSHELL: string;
	export const JOURNAL_STREAM: string;
	export const XDG_DATA_DIRS: string;
	export const LIBEXEC_PATH: string;
	export const PATH: string;
	export const ZPLUG_ERROR_LOG: string;
	export const ALACRITTY_LOG: string;
	export const GDMSESSION: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const tmux_version: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const npm_node_execpath: string;
	export const LC_NUMERIC: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		LSCOLORS: string;
		SESSION_MANAGER: string;
		WINDOWID: string;
		ZPLUG_ROOT: string;
		COLORTERM: string;
		__HM_SESS_VARS_SOURCED: string;
		XDG_CONFIG_DIRS: string;
		LESS: string;
		XDG_MENU_PREFIX: string;
		TERM_PROGRAM_VERSION: string;
		WLR_NO_HARDWARE_CURSORS: string;
		_ZPLUG_VERSION: string;
		TMUX: string;
		_P9K_TTY: string;
		FPATH: string;
		NODE: string;
		ZPLUG_CACHE_DIR: string;
		LC_ADDRESS: string;
		_ZPLUG_PREZTO: string;
		LC_NAME: string;
		SSH_AUTH_SOCK: string;
		P9K_TTY: string;
		XCURSOR_PATH: string;
		MEMORY_PRESSURE_WRITE: string;
		LOCALE_ARCHIVE_2_27: string;
		npm_config_local_prefix: string;
		_ZPLUG_AWKPATH: string;
		ZPLUG_THREADS: string;
		ZPLUG_FILTER: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		GDK_PIXBUF_MODULE_FILE: string;
		EDITOR: string;
		NAUTILUS_4_EXTENSION_DIR: string;
		PWD: string;
		NIX_PROFILES: string;
		NIX_GSETTINGS_OVERRIDES_DIR: string;
		TRACKER_CLI_SUBCOMMANDS_DIR: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		_ZPLUG_URL: string;
		NIX_PATH: string;
		SYSTEMD_EXEC_PID: string;
		NIXPKGS_CONFIG: string;
		_: string;
		XAUTHORITY: string;
		_ZPLUG_OHMYZSH: string;
		PERIOD: string;
		WINDOWPATH: string;
		GDM_LANG: string;
		HOME: string;
		USERNAME: string;
		SSH_ASKPASS: string;
		LANG: string;
		LC_PAPER: string;
		NIXOS_OZONE_WL: string;
		TMUX_TMPDIR: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		NMV_COMPLETION: string;
		npm_package_version: string;
		_ZSH_TMUX_FIXED_CONFIG: string;
		MEMORY_PRESSURE_WATCH: string;
		GIO_EXTRA_MODULES: string;
		INVOCATION_ID: string;
		NVM_LAZY_LOAD: string;
		MANAGERPID: string;
		NIX_USER_PROFILE_DIR: string;
		ALACRITTY_SOCKET: string;
		INFOPATH: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		LC_IDENTIFICATION: string;
		npm_package_name: string;
		XDG_DESKTOP_PORTAL_DIR: string;
		GTK_PATH: string;
		LESSOPEN: string;
		USER: string;
		TMUX_PANE: string;
		ZPLUG_BIN: string;
		ZPLUG_PROTOCOL: string;
		TZDIR: string;
		ZPLUG_USE_CACHE: string;
		DISPLAY: string;
		SHLVL: string;
		ZPLUG_HOME: string;
		__HM_ZSH_SESS_VARS_SOURCED: string;
		PAGER: string;
		LC_TELEPHONE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		LC_MEASUREMENT: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		ZPLUG_REPOS: string;
		LOCALE_ARCHIVE: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		ZPLUG_LOADFILE: string;
		GDM_X_SERVER_EXTRA_ARGS: string;
		TERMINFO_DIRS: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		ZSH_TMUX_TERM: string;
		LC_TIME: string;
		npm_package_json: string;
		P9K_SSH: string;
		_ZPLUG_CONFIG_SUBSHELL: string;
		JOURNAL_STREAM: string;
		XDG_DATA_DIRS: string;
		LIBEXEC_PATH: string;
		PATH: string;
		ZPLUG_ERROR_LOG: string;
		ALACRITTY_LOG: string;
		GDMSESSION: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		tmux_version: string;
		ALACRITTY_WINDOW_ID: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		npm_node_execpath: string;
		LC_NUMERIC: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
