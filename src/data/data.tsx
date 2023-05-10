import {
  LayoutDashboard,
  ShoppingCart,
  ShoppingBag,
  PencilIcon,
  DollarSignIcon,
  Smartphone,
  Users2Icon,
  Settings,
  User2,
  HelpCircleIcon,
  ChevronRightIcon,
} from "lucide-react";

export const selectOptions = [
  {
    icon: <LayoutDashboard />,
    name: "Dashboard",
  },
  {
    icon: <ShoppingCart />,
    name: "Minhas Vendas",
    arrow: <ChevronRightIcon />,
    option1: "E-Commerce",
    option2: "Digitais/Fisicos",
  },
  {
    icon: <ShoppingBag />,
    name: "Meus Produtos",
    arrow: <ChevronRightIcon />,
    option1: "E-Commerce",
    option2: "Digitais/Fisicos",
  },
  {
    icon: <PencilIcon />,
    name: "Assinaturas",
  },
  {
    icon: <DollarSignIcon />,
    name: "Cobrança",
  },
  {
    icon: <Smartphone />,
    name: "Banco Virtual",
    arrow: <ChevronRightIcon />,
    option1: "Conta Bancaria",
    option2: "Cartão",
  },
  {
    icon: <Users2Icon />,
    name: "Clientes",
  },
  {
    icon: <Settings />,
    name: "Configurações",
    arrow: <ChevronRightIcon />,
    option1: "Getways",
    option2: "Mensagens",
  },
  {
    icon: <User2 />,
    name: "Minha Conta",
  },
  {
    icon: <HelpCircleIcon />,
    name: "Ajuda",
  },
];
