import { jsx, jsxs } from 'react/jsx-runtime';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { X as X$1, PanelLeft, ChevronRight, Check, Circle, Sun, Moon, ChevronsUpDown, Frame, PieChart, Map } from 'lucide-react';
import * as g from 'react';
import { forwardRef, createContext, useState, useCallback, useEffect, useMemo, useContext } from 'react';
import * as S from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as p from '@radix-ui/react-dialog';
import * as ae from '@radix-ui/react-separator';
import * as J from '@radix-ui/react-collapsible';
import * as y from '@radix-ui/react-avatar';
import * as l from '@radix-ui/react-dropdown-menu';
import { SiLinkedin, SiGithub, SiReact, SiTypescript, SiTailwindcss, SiReactquery, SiNx, SiReactrouter, SiZod, SiReacthookform, SiNodedotjs } from 'react-icons/si';
import { C as Ct, E as Et } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import '@tanstack/react-router';
import 'tiny-invariant';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import '@tanstack/react-cross-context';
import 'react-dom';

const E = 768;
function te() {
  const [a, t] = useState(void 0);
  return useEffect(() => {
    const i = window.matchMedia(`(max-width: ${E - 1}px)`), r = () => {
      t(window.innerWidth < E);
    };
    return i.addEventListener("change", r), t(window.innerWidth < E), () => i.removeEventListener("change", r);
  }, []), !!a;
}
function n(...a) {
  return twMerge(clsx(a));
}
const ea = S.Provider, aa = S.Root, ta = S.Trigger, ie = forwardRef(({ className: a, sideOffset: t = 4, ...i }, r) => jsx(S.Content, { ref: r, sideOffset: t, className: n("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a), ...i }));
ie.displayName = S.Content.displayName;
const ia = p.Root, na = p.Portal, ne = forwardRef(({ className: a, ...t }, i) => jsx(p.Overlay, { className: n("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a), ...t, ref: i }));
ne.displayName = p.Overlay.displayName;
const ra = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", { variants: { side: { top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm" } }, defaultVariants: { side: "right" } }), re = forwardRef(({ side: a = "right", className: t, children: i, ...r }, d) => jsxs(na, { children: [jsx(ne, {}), jsxs(p.Content, { ref: d, className: n(ra({ side: a }), t), ...r, children: [i, jsxs(p.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [jsx(X$1, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] }));
re.displayName = p.Content.displayName;
const oa = forwardRef(({ className: a, ...t }, i) => jsx(p.Title, { ref: i, className: n("text-lg font-semibold text-foreground", a), ...t }));
oa.displayName = p.Title.displayName;
const sa = forwardRef(({ className: a, ...t }, i) => jsx(p.Description, { ref: i, className: n("text-sm text-muted-foreground", a), ...t }));
sa.displayName = p.Description.displayName;
const da = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90", outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-10 px-4 py-2", sm: "h-9 rounded-md px-3", lg: "h-11 rounded-md px-8", icon: "h-10 w-10" } }, defaultVariants: { variant: "default", size: "default" } }), F = forwardRef(({ className: a, variant: t, size: i, asChild: r = false, ...d }, c) => jsx(r ? Slot : "button", { className: n(da({ variant: t, size: i, className: a })), ref: c, ...d }));
F.displayName = "Button";
const oe = g.forwardRef(({ className: a, orientation: t = "horizontal", decorative: i = true, ...r }, d) => jsx(ae.Root, { ref: d, decorative: i, orientation: t, className: n("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", a), ...r }));
oe.displayName = ae.Root.displayName;
function U({ className: a, ...t }) {
  return jsx("div", { className: n("animate-pulse rounded-md bg-muted", a), ...t });
}
const se = forwardRef(({ className: a, type: t, ...i }, r) => jsx("input", { type: t, className: n("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", a), ref: r, ...i }));
se.displayName = "Input";
const la = "sidebar:state", ca = 60 * 60 * 24 * 7, ua = "16rem", pa = "18rem", ma = "3rem", ba = "b", de = createContext(null);
function C() {
  const a = useContext(de);
  if (!a)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return a;
}
const le = forwardRef(({ defaultOpen: a = true, open: t, onOpenChange: i, className: r, style: d, children: c, ...b }, N) => {
  const m = te(), [h, f] = useState(false), [k, ke] = useState(a), v = t != null ? t : k, M = useCallback((u) => {
    if (i)
      return i == null ? void 0 : i(typeof u == "function" ? u(v) : u);
    ke(u), document.cookie = `${la}=${v}; path=/; max-age=${ca}`;
  }, [i, v]), R = useCallback(() => m ? f((u) => !u) : M((u) => !u), [m, M, f]);
  useEffect(() => {
    const u = (D) => {
      D.key === ba && (D.metaKey || D.ctrlKey) && (D.preventDefault(), R());
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [R]);
  const W = v ? "expanded" : "collapsed", Me = useMemo(() => ({ state: W, open: v, setOpen: M, isMobile: m, openMobile: h, setOpenMobile: f, toggleSidebar: R }), [W, v, M, m, h, f, R]);
  return jsx(de.Provider, { value: Me, children: jsx(ea, { delayDuration: 0, children: jsx("div", { style: { "--sidebar-width": ua, "--sidebar-width-icon": ma, ...d }, className: n("group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full", r), ref: N, ...b, children: c }) }) });
});
le.displayName = "SidebarProvider";
const ce = forwardRef(({ side: a = "left", variant: t = "sidebar", collapsible: i = "offcanvas", className: r, children: d, ...c }, b) => {
  const { isMobile: N, state: m, openMobile: h, setOpenMobile: f } = C();
  return i === "none" ? jsx("div", { className: n("bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col", r), ref: b, ...c, children: d }) : N ? jsx(ia, { open: h, onOpenChange: f, ...c, children: jsx(re, { "data-sidebar": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden", style: { "--sidebar-width": pa }, side: a, children: jsx("div", { className: "flex h-full w-full flex-col", children: d }) }) }) : jsxs("div", { ref: b, className: "text-sidebar-foreground group peer hidden md:block", "data-state": m, "data-collapsible": m === "collapsed" ? i : "", "data-variant": t, "data-side": a, children: [jsx("div", { className: n("relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]") }), jsx("div", { className: n("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", a === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", r), ...c, children: jsx("div", { "data-sidebar": "sidebar", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow", children: d }) })] });
});
ce.displayName = "Sidebar";
const ue = forwardRef(({ className: a, onClick: t, ...i }, r) => {
  const { toggleSidebar: d } = C();
  return jsxs(F, { ref: r, "data-sidebar": "trigger", variant: "ghost", size: "icon", className: n("h-7 w-7", a), onClick: (c) => {
    t == null ? void 0 : t(c), d();
  }, ...i, children: [jsx(PanelLeft, {}), jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] });
});
ue.displayName = "SidebarTrigger";
const pe = forwardRef(({ className: a, ...t }, i) => {
  const { toggleSidebar: r } = C();
  return jsx("button", { ref: i, "data-sidebar": "rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: r, title: "Toggle Sidebar", className: n("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", a), ...t });
});
pe.displayName = "SidebarRail";
const me = forwardRef(({ className: a, ...t }, i) => jsx("main", { ref: i, className: n("relative flex min-h-svh flex-1 flex-col bg-background", "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", a), ...t }));
me.displayName = "SidebarInset";
const fa = forwardRef(({ className: a, ...t }, i) => jsx(se, { ref: i, "data-sidebar": "input", className: n("focus-visible:ring-sidebar-ring h-8 w-full bg-background shadow-none focus-visible:ring-2", a), ...t }));
fa.displayName = "SidebarInput";
const be = forwardRef(({ className: a, ...t }, i) => jsx("div", { ref: i, "data-sidebar": "header", className: n("flex flex-col gap-2 p-2", a), ...t }));
be.displayName = "SidebarHeader";
const ga = forwardRef(({ className: a, ...t }, i) => jsx("div", { ref: i, "data-sidebar": "footer", className: n("flex flex-col gap-2 p-2", a), ...t }));
ga.displayName = "SidebarFooter";
const ha = forwardRef(({ className: a, ...t }, i) => jsx(oe, { ref: i, "data-sidebar": "separator", className: n("bg-sidebar-border mx-2 w-auto", a), ...t }));
ha.displayName = "SidebarSeparator";
const fe = forwardRef(({ className: a, ...t }, i) => jsx("div", { ref: i, "data-sidebar": "content", className: n("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", a), ...t }));
fe.displayName = "SidebarContent";
const ge = forwardRef(({ className: a, ...t }, i) => jsx("div", { ref: i, "data-sidebar": "group", className: n("relative flex w-full min-w-0 flex-col p-2", a), ...t }));
ge.displayName = "SidebarGroup";
const he = forwardRef(({ className: a, asChild: t = false, ...i }, r) => jsx(t ? Slot : "div", { ref: r, "data-sidebar": "group-label", className: n("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", a), ...i }));
he.displayName = "SidebarGroupLabel";
const va = forwardRef(({ className: a, asChild: t = false, ...i }, r) => jsx(t ? Slot : "button", { ref: r, "data-sidebar": "group-action", className: n("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", a), ...i }));
va.displayName = "SidebarGroupAction";
const xa = forwardRef(({ className: a, ...t }, i) => jsx("div", { ref: i, "data-sidebar": "group-content", className: n("w-full text-sm", a), ...t }));
xa.displayName = "SidebarGroupContent";
const H = forwardRef(({ className: a, ...t }, i) => jsx("ul", { ref: i, "data-sidebar": "menu", className: n("flex w-full min-w-0 flex-col gap-1", a), ...t }));
H.displayName = "SidebarMenu";
const K = forwardRef(({ className: a, ...t }, i) => jsx("li", { ref: i, "data-sidebar": "menu-item", className: n("group/menu-item relative", a), ...t }));
K.displayName = "SidebarMenuItem";
const wa = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", { variants: { variant: { default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]" }, size: { default: "h-8 text-sm", sm: "h-7 text-xs", lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0" } }, defaultVariants: { variant: "default", size: "default" } }), V = forwardRef(({ asChild: a = false, isActive: t = false, variant: i = "default", size: r = "default", tooltip: d, className: c, ...b }, N) => {
  const m = a ? Slot : "button", { isMobile: h, state: f } = C(), k = jsx(m, { ref: N, "data-sidebar": "menu-button", "data-size": r, "data-active": t, className: n(wa({ variant: i, size: r }), c), ...b });
  return d ? (typeof d == "string" && (d = { children: d }), jsxs(aa, { children: [jsx(ta, { asChild: true, children: k }), jsx(ie, { side: "right", align: "center", hidden: f !== "collapsed" || h, ...d })] })) : k;
});
V.displayName = "SidebarMenuButton";
const ya = forwardRef(({ className: a, asChild: t = false, showOnHover: i = false, ...r }, d) => jsx(t ? Slot : "button", { ref: d, "data-sidebar": "menu-action", className: n("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", i && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0", a), ...r }));
ya.displayName = "SidebarMenuAction";
const Na = forwardRef(({ className: a, ...t }, i) => jsx("div", { ref: i, "data-sidebar": "menu-badge", className: n("text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", a), ...t }));
Na.displayName = "SidebarMenuBadge";
const Sa = forwardRef(({ className: a, showIcon: t = false, ...i }, r) => {
  const d = useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return jsxs("div", { ref: r, "data-sidebar": "menu-skeleton", className: n("flex h-8 items-center gap-2 rounded-md px-2", a), ...i, children: [t && jsx(U, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }), jsx(U, { className: "h-4 max-w-[--skeleton-width] flex-1", "data-sidebar": "menu-skeleton-text", style: { "--skeleton-width": d } })] });
});
Sa.displayName = "SidebarMenuSkeleton";
const ve = forwardRef(({ className: a, ...t }, i) => jsx("ul", { ref: i, "data-sidebar": "menu-sub", className: n("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", a), ...t }));
ve.displayName = "SidebarMenuSub";
const xe = forwardRef(({ ...a }, t) => jsx("li", { ref: t, ...a }));
xe.displayName = "SidebarMenuSubItem";
const we = forwardRef(({ asChild: a = false, size: t = "md", isActive: i, className: r, ...d }, c) => jsx(a ? Slot : "a", { ref: c, "data-sidebar": "menu-sub-button", "data-size": t, "data-active": i, className: n("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", t === "sm" && "text-xs", t === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", r), ...d }));
we.displayName = "SidebarMenuSubButton";
const Ca = J.Root, ka = J.CollapsibleTrigger, Ma = J.CollapsibleContent;
function Ra({ items: a }) {
  return jsxs(ge, { children: [jsx(he, { children: "Platform" }), jsx(H, { children: a.map((t) => {
    var _a2;
    return jsx(Ca, { asChild: true, defaultOpen: t.isActive, className: "group/collapsible", children: jsxs(K, { children: [jsx(ka, { asChild: true, children: jsxs(V, { tooltip: t.title, children: [t.icon && jsx(t.icon, { className: "text-primary" }), jsx("span", { children: t.title }), t.items && jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })] }) }), jsx(Ma, { children: jsx(ve, { children: (_a2 = t.items) == null ? void 0 : _a2.map((i) => jsx(xe, { children: jsx(we, { asChild: true, children: jsx("a", { href: i.url, children: jsx("span", { children: i.title }) }) }) }, i.title)) }) })] }) }, t.title);
  }) })] });
}
const P = forwardRef(({ className: a, ...t }, i) => jsx(y.Root, { ref: i, className: n("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", a), ...t }));
P.displayName = y.Root.displayName;
const O = forwardRef(({ className: a, ...t }, i) => jsx(y.Image, { ref: i, className: n("aspect-square h-full w-full", a), ...t }));
O.displayName = y.Image.displayName;
const B = forwardRef(({ className: a, ...t }, i) => jsx(y.Fallback, { ref: i, className: n("flex h-full w-full items-center justify-center rounded-full bg-muted", a), ...t }));
B.displayName = y.Fallback.displayName;
const ye = l.Root, Ne = l.Trigger, $ = l.Group, Da = forwardRef(({ className: a, inset: t, children: i, ...r }, d) => jsxs(l.SubTrigger, { ref: d, className: n("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", a), ...r, children: [i, jsx(ChevronRight, { className: "ml-auto" })] }));
Da.displayName = l.SubTrigger.displayName;
const Ia = forwardRef(({ className: a, ...t }, i) => jsx(l.SubContent, { ref: i, className: n("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a), ...t }));
Ia.displayName = l.SubContent.displayName;
const q = forwardRef(({ className: a, sideOffset: t = 4, ...i }, r) => jsx(l.Portal, { children: jsx(l.Content, { ref: r, sideOffset: t, className: n("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a), ...i }) }));
q.displayName = l.Content.displayName;
const x = forwardRef(({ className: a, inset: t, ...i }, r) => jsx(l.Item, { ref: r, className: n("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", a), ...i }));
x.displayName = l.Item.displayName;
const Ta = forwardRef(({ className: a, children: t, checked: i, ...r }, d) => jsxs(l.CheckboxItem, { ref: d, className: n("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a), checked: i, ...r, children: [jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(l.ItemIndicator, { children: jsx(Check, { className: "h-4 w-4" }) }) }), t] }));
Ta.displayName = l.CheckboxItem.displayName;
const za = forwardRef(({ className: a, children: t, ...i }, r) => jsxs(l.RadioItem, { ref: r, className: n("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a), ...i, children: [jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(l.ItemIndicator, { children: jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }), t] }));
za.displayName = l.RadioItem.displayName;
const Se = forwardRef(({ className: a, inset: t, ...i }, r) => jsx(l.Label, { ref: r, className: n("px-2 py-1.5 text-sm font-semibold", t && "pl-8", a), ...i }));
Se.displayName = l.Label.displayName;
const L = forwardRef(({ className: a, ...t }, i) => jsx(l.Separator, { ref: i, className: n("-mx-1 my-1 h-px bg-muted", a), ...t }));
L.displayName = l.Separator.displayName;
function _a({ user: a }) {
  const { isMobile: t } = C();
  return jsx(H, { children: jsx(K, { children: jsxs(ye, { children: [jsx(Ne, { asChild: true, children: jsxs(V, { size: "lg", className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [jsxs(P, { className: "h-8 w-8 rounded-lg", children: [jsx(O, { src: a.avatar, alt: a.name }), jsx(B, { className: "rounded-lg", children: "SC" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: a.name }), jsx("span", { className: "truncate text-xs", children: a.email })] }), jsx(ChevronsUpDown, { className: "ml-auto size-4" })] }) }), jsxs(q, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", side: t ? "bottom" : "right", align: "end", sideOffset: 4, children: [jsx(Se, { className: "p-0 font-normal", children: jsxs("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [jsxs(P, { className: "h-8 w-8 rounded-lg", children: [jsx(O, { src: a.avatar, alt: a.name }), jsx(B, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: a.name }), jsx("span", { className: "truncate text-xs", children: a.email })] })] }) }), jsx(L, {}), jsx($, { children: jsxs(x, { children: [jsx(SiLinkedin, {}), jsx("a", { href: "https://www.linkedin.com/in/sviatoslav-chyzh-852113176/", target: "_blank", children: "Linkedin Profile" })] }) }), jsx(L, {}), jsx($, { children: jsxs(x, { children: [jsx(SiGithub, {}), jsx("a", { href: "https://github.com/SviatoslavChyzh", target: "_blank", children: "Github Account" })] }) })] })] }) }) });
}
const Ea = "/_build/assets/avatar-BJAW_CWN.jpg", X = { user: { name: "Sviatoslav Chyzh", email: "", avatar: Ea }, navMain: [{ title: "React", url: "#", icon: SiReact, isActive: true, items: [{ title: "React experience", url: "#" }] }, { title: "Typescript", url: "#", icon: SiTypescript }, { title: "Tailwind CSS", url: "#", icon: SiTailwindcss }, { title: "Tanstack", url: "#", icon: SiReactquery }, { title: "NX", url: "#", icon: SiNx }, { title: "React Router", url: "#", icon: SiReactrouter }, { title: "Validation", url: "#", icon: SiZod }, { title: "React Hook Form", url: "#", icon: SiReacthookform }, { title: "Node.js", url: "#", icon: SiNodedotjs }], projects: [{ name: "Design Engineering", url: "#", icon: Frame }, { name: "Sales & Marketing", url: "#", icon: PieChart }, { name: "Travel", url: "#", icon: Map }] };
function Aa({ ...a }) {
  return jsxs(ce, { collapsible: "icon", ...a, children: [jsx(be, { children: jsx(_a, { user: X.user }) }), jsx(fe, { children: jsx(Ra, { items: X.navMain }) }), jsx(pe, {})] });
}
const I = g.forwardRef(({ className: a, ...t }, i) => jsx("div", { ref: i, className: n("rounded-lg border bg-card text-card-foreground shadow-sm", a), ...t }));
I.displayName = "Card";
const T = g.forwardRef(({ className: a, ...t }, i) => jsx("div", { ref: i, className: n("flex flex-col space-y-1.5 p-6", a), ...t }));
T.displayName = "CardHeader";
const z = g.forwardRef(({ className: a, ...t }, i) => jsx("h3", { ref: i, className: n("text-2xl font-semibold leading-none tracking-tight", a), ...t }));
z.displayName = "CardTitle";
const j = g.forwardRef(({ className: a, ...t }, i) => jsx("p", { ref: i, className: n("text-sm text-muted-foreground", a), ...t }));
j.displayName = "CardDescription";
const _ = g.forwardRef(({ className: a, ...t }, i) => jsx("div", { ref: i, className: n("p-6 pt-0", a), ...t }));
_.displayName = "CardContent";
const Ce = g.forwardRef(({ className: a, ...t }, i) => jsx("div", { ref: i, className: n("flex items-center p-6 pt-0", a), ...t }));
Ce.displayName = "CardFooter";
const Pa = [{ id: "1", title: "Front-End Software Engineer", company: "GfK - NIQ company", startDate: "Jun 2021", endDate: "Present", description: ["Work with project managers, business analysts, and developers to get issues found during development cycle resolved and re-delivered to QA team for retest", "Successfully collaborated as part of product teams for the launch of various projects that involved both front-end applications and back-end servers", "Researched and articulated business requirements into Business requirement documents", "Developed 4+ web applications by using responsive UI elements and shadcn/ui components library via React concepts for smooth performance", "Build user interfaces of web applications with React.js and JavaScript based on the approved designs", "Analyzed user requirements and developed 50+ responsive and functional UI components via React concepts"] }, { id: "2", title: "Junior Software Engineer .NET", company: "GfK", startDate: "Oct 2019", endDate: "Jun 2021", description: ["Migrated project for matching product groups from VB.NET ASP Classic to newer technology stack such as: ASP.NET Core 3.1, Angular, Angular Material, State management Akita", "Involved in the design and implementation of enhancements and customizations \u2022 Executed SQL queries to ensure the data integrity by checking various kinds of constraints", "Work with various teams to setup and conduct Sharable Components Library"] }, { id: "3", title: "Magento Developer", company: "Smile Ukraine", startDate: "Oct 2018", endDate: "Oct 2019", description: ["Development of e-commerce web shops based on the Magento eCommerce platform."] }, { id: "4", title: "Engineer\u2013Developer", company: "Region \u201CTernopiloblenergo\u201D", startDate: "Jan 2017", endDate: "Oct 2018", description: ["Developer. Support of billing software \u201CSunFlower\u201D. Setting up servers, db, developing client and server side. Support of Act of breach of contract accounting and circulation program. Support of Electric counters accounting and circulation program.", "Maintenance (both development and administration) of the existing billing system \u201CSunFlower\u201D. Support the system, developing new features, modifying business rules (stored procedures \u041CS SQL). Microsoft Visual Studio 2017, C# has been used to develop user interface.", "Development web application PortalTOE for adding data of employees, using ASP.NET Core on backend and HTML, CSS, JQuery, AngularJS on frontend."] }, { id: "5", title: "System administrator 1\u0421", company: "\u0422\u0415R\u041A\u041E Auto Ternopil", startDate: "Jan 2016", endDate: "Jan 2017", description: ["Administration of 1C:Enterprise 8.3. Maintenance of the existing accounting system. Development of new features, modifying business rules (stored procedures MS SQL).", "Development of the reports for CarCleaning application connecting to 1C database."] }, { id: "6", title: "Junior developer", company: "REM Zbarazh", startDate: "Mar 2012", endDate: "Jan 2016", description: ["Run and terminated low voltage cable, voice and data structured cabling, fiber and coaxial.", "Installed Internet, cable, and telephone inside office rooms.", "Analize billing reports", `Created and maintained Database clients of the electricity company in 0.4kV networks in
MSSQL.`] }, { id: "7", title: "Junior developer", company: "IIT Ternopil \u2013 PAT \u201CISKRA\u201D Lviv", startDate: "Sep 2009", endDate: "Mar 2012", description: ["JavaScript, HTML, CSS.", "Development of the web application for the company."] }];
function Oa() {
  const { setTheme: a } = Et();
  return jsxs(ye, { children: [jsx(Ne, { asChild: true, children: jsxs(F, { variant: "outline", size: "icon", children: [jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), jsx("span", { className: "sr-only", children: "Toggle theme" })] }) }), jsxs(q, { align: "end", children: [jsx(x, { onClick: () => a("light"), children: "Light" }), jsx(x, { onClick: () => a("dark"), children: "Dark" }), jsx(x, { onClick: () => a("system"), children: "System" })] })] });
}
function Ba() {
  return jsxs(I, { children: [jsx(T, { children: jsx(z, { children: "React Experience" }) }), jsxs(_, { children: [jsx("p", { children: "I have been working with React for over 5 years. I have experience with various libraries and tools such as React Router, React Query, and React Hook Form." }), jsx("p", { children: "I have built several web applications using React and I am comfortable working with both class components and functional components." })] })] });
}
const nt = function() {
  const t = te();
  return jsx(Ct, { defaultTheme: "dark", storageKey: "ui-theme", children: jsxs(le, { children: [jsx(Aa, {}), jsxs(me, { children: [jsxs("header", { className: "flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12", children: [jsx("div", { className: "flex items-center px-4", children: jsx(ue, { className: "-ml-1" }) }), jsx("div", { className: "px-4", children: jsx(Oa, {}) })] }), jsxs(I, { className: "mx-4", children: [jsxs(T, { children: [jsx(z, { children: "Sviatoslav Chyzh" }), jsx(j, { children: "skills & experience" })] }), jsxs(_, { children: [jsx("p", { className: "mb-6 max-w-[45ch] border-b-4", children: "I am a software engineer with a passion for building web applications. I have experience working with React, TypeScript, and Tailwind CSS. I am always looking to learn new technologies and improve my skills" }), jsx("div", { className: `${t ? "w-[calc(100vw-10rem)]" : "w-[calc(100vw-25rem)]"} job-experience relative grid grid-flow-col justify-start gap-4 overflow-auto p-4`, children: Pa.map((i) => jsxs(I, { children: [jsxs(T, { children: [jsxs(j, { className: "text-primary", children: [i.startDate, " - ", i.endDate] }), jsx(z, { children: jsxs("div", { className: "flex min-w-96 items-center justify-between gap-4", children: [jsx("h2", { children: i.title }), jsx("span", { className: "uppercase text-accent", children: i.company })] }) })] }), jsx(_, { children: jsx("ul", { className: "list-disc text-muted-foreground", children: i.description.map((r, d) => jsx("li", { children: r }, d)) }) })] }, i.id)) }), jsx(Ba, {})] }), jsx(Ce, {})] })] })] }) });
};

export { nt as component };
//# sourceMappingURL=index-BabbpXxs.mjs.map
