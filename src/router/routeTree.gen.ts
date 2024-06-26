/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './../routes/__root'
import { Route as PublicImport } from './../routes/_public'
import { Route as ProtectedImport } from './../routes/_protected'
import { Route as IndexImport } from './../routes/index'
import { Route as PublicRegisterImport } from './../routes/_public/register'
import { Route as PublicLoginImport } from './../routes/_public/login'
import { Route as PublicAboutImport } from './../routes/_public/about'
import { Route as ProtectedProfileImport } from './../routes/_protected/profile'
import { Route as ProtectedDashboardImport } from './../routes/_protected/dashboard'
import { Route as ProtectedDashboardIndexImport } from './../routes/_protected/dashboard/index'
import { Route as ProtectedDashboardNewsImport } from './../routes/_protected/dashboard/news'
import { Route as ProtectedDashboardFeaturesImport } from './../routes/_protected/dashboard/features'
import { Route as ProtectedDashboardEventsImport } from './../routes/_protected/dashboard/events'

// Create/Update Routes

const PublicRoute = PublicImport.update({
  id: '/_public',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedRoute = ProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PublicRegisterRoute = PublicRegisterImport.update({
  path: '/register',
  getParentRoute: () => PublicRoute,
} as any)

const PublicLoginRoute = PublicLoginImport.update({
  path: '/login',
  getParentRoute: () => PublicRoute,
} as any)

const PublicAboutRoute = PublicAboutImport.update({
  path: '/about',
  getParentRoute: () => PublicRoute,
} as any)

const ProtectedProfileRoute = ProtectedProfileImport.update({
  path: '/profile',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedDashboardRoute = ProtectedDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedDashboardIndexRoute = ProtectedDashboardIndexImport.update({
  path: '/',
  getParentRoute: () => ProtectedDashboardRoute,
} as any)

const ProtectedDashboardNewsRoute = ProtectedDashboardNewsImport.update({
  path: '/news',
  getParentRoute: () => ProtectedDashboardRoute,
} as any)

const ProtectedDashboardFeaturesRoute = ProtectedDashboardFeaturesImport.update(
  {
    path: '/features',
    getParentRoute: () => ProtectedDashboardRoute,
  } as any,
)

const ProtectedDashboardEventsRoute = ProtectedDashboardEventsImport.update({
  path: '/events',
  getParentRoute: () => ProtectedDashboardRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_protected': {
      id: '/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ProtectedImport
      parentRoute: typeof rootRoute
    }
    '/_public': {
      id: '/_public'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PublicImport
      parentRoute: typeof rootRoute
    }
    '/_protected/dashboard': {
      id: '/_protected/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof ProtectedDashboardImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/profile': {
      id: '/_protected/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProtectedProfileImport
      parentRoute: typeof ProtectedImport
    }
    '/_public/about': {
      id: '/_public/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof PublicAboutImport
      parentRoute: typeof PublicImport
    }
    '/_public/login': {
      id: '/_public/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof PublicLoginImport
      parentRoute: typeof PublicImport
    }
    '/_public/register': {
      id: '/_public/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof PublicRegisterImport
      parentRoute: typeof PublicImport
    }
    '/_protected/dashboard/events': {
      id: '/_protected/dashboard/events'
      path: '/events'
      fullPath: '/dashboard/events'
      preLoaderRoute: typeof ProtectedDashboardEventsImport
      parentRoute: typeof ProtectedDashboardImport
    }
    '/_protected/dashboard/features': {
      id: '/_protected/dashboard/features'
      path: '/features'
      fullPath: '/dashboard/features'
      preLoaderRoute: typeof ProtectedDashboardFeaturesImport
      parentRoute: typeof ProtectedDashboardImport
    }
    '/_protected/dashboard/news': {
      id: '/_protected/dashboard/news'
      path: '/news'
      fullPath: '/dashboard/news'
      preLoaderRoute: typeof ProtectedDashboardNewsImport
      parentRoute: typeof ProtectedDashboardImport
    }
    '/_protected/dashboard/': {
      id: '/_protected/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof ProtectedDashboardIndexImport
      parentRoute: typeof ProtectedDashboardImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  ProtectedRoute: ProtectedRoute.addChildren({
    ProtectedDashboardRoute: ProtectedDashboardRoute.addChildren({
      ProtectedDashboardEventsRoute,
      ProtectedDashboardFeaturesRoute,
      ProtectedDashboardNewsRoute,
      ProtectedDashboardIndexRoute,
    }),
    ProtectedProfileRoute,
  }),
  PublicRoute: PublicRoute.addChildren({
    PublicAboutRoute,
    PublicLoginRoute,
    PublicRegisterRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_protected",
        "/_public"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_protected": {
      "filePath": "_protected.tsx",
      "children": [
        "/_protected/dashboard",
        "/_protected/profile"
      ]
    },
    "/_public": {
      "filePath": "_public.tsx",
      "children": [
        "/_public/about",
        "/_public/login",
        "/_public/register"
      ]
    },
    "/_protected/dashboard": {
      "filePath": "_protected/dashboard.tsx",
      "parent": "/_protected",
      "children": [
        "/_protected/dashboard/events",
        "/_protected/dashboard/features",
        "/_protected/dashboard/news",
        "/_protected/dashboard/"
      ]
    },
    "/_protected/profile": {
      "filePath": "_protected/profile.tsx",
      "parent": "/_protected"
    },
    "/_public/about": {
      "filePath": "_public/about.tsx",
      "parent": "/_public"
    },
    "/_public/login": {
      "filePath": "_public/login.tsx",
      "parent": "/_public"
    },
    "/_public/register": {
      "filePath": "_public/register.tsx",
      "parent": "/_public"
    },
    "/_protected/dashboard/events": {
      "filePath": "_protected/dashboard/events.tsx",
      "parent": "/_protected/dashboard"
    },
    "/_protected/dashboard/features": {
      "filePath": "_protected/dashboard/features.tsx",
      "parent": "/_protected/dashboard"
    },
    "/_protected/dashboard/news": {
      "filePath": "_protected/dashboard/news.tsx",
      "parent": "/_protected/dashboard"
    },
    "/_protected/dashboard/": {
      "filePath": "_protected/dashboard/index.tsx",
      "parent": "/_protected/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
