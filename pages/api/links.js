// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var links = [
    {
      tab: "GERAL",
      label: "Connect",
      href: "https://login.microsoftonline.com/b7be7686-6f97-4db7-9081-a23cf09a96b5/saml2?SAMLRequest=rZNNj5swEIb%2FCvKd7wDBCqnSRFUj9QPtRnvopRqMSSwZm3pMN%2F33NSS7m0Ob%0AQ9WTJc87M%2B8zY68QejnQzWhP6oH%2FGDla79xLhXQOVGQ0impAgVRBz5FaRh83%0Anz%2FRJIjoYLTVTEvi7VyeUGCFVhU5WTsgDUOpj0IFvWBGo%2B6sVlIoHjDdh03R%0A8CJf5n7elYW%2FaJvCL6Nl7EOSsi4qocybLJwMJMT7oA3js7%2BKRMTb7yryfZGk%0A2aJL4wIiaNo0TViesxhSvsyWRbxwWXvEke8VWlC2IkkUl36c%2BFF%2BiFOaLWlW%0AfiNefbX%2FXqhWqON91uYiQvrxcKj9%2BuvjYS7wU7TcfHHqN2xgjCPaDoITSCma%0A0Tj0GbsFBb6CEBzNjOdz1Q5aKBuwo3g3VDjExHviBuc5urZkvZp0dMYxN5u5%0AbxYQuZmWQdb%2Fx9UqvLFx8TTQCXu%2Fq7UU7Je3kVI%2Fbw0H60YRk%2FBFdH1UvJ1X%0AuNXK8rP1trofwAicMPkZmH0BvVVtpeN44N2%2FYN%2BVMcqm0u66dsezNu2V70%2Fd%0A15fYX0heo7c%2FaP0b%0A&amp;RelayState=https%3A%2F%2Faccesstfa.halliburton.com%2Fmfa",
      description: "Página inicial"
    },
    {
      tab: "GERAL",
      label: "Portal Brasil",
      href: "https://halliburton.sharepoint.com/sites/portalla/br/default.aspx",
      description: ""
    },
    
    {
      tab: "GERAL",
      label: "Email Pessoal",
      href: "https://outlook.office.com/mail/inbox",
      description: ""
    },
    {
      tab: "GERAL",
      label: "Email Sonda",
      href: "https://accesstfa.halliburton.com/owa/,DanaInfo=.aeyekesmlHqkwxvp97-66Tx-9,SSL+#path=/mail",
      description: ""
    },
    {
      tab: "GERAL",
      label: "Manuais",
      href: "https://accesstfa.halliburton.com/Manuals/,DanaInfo=.asqguv32ljImz32Nwq231vDBEAAZ3ED+Ops_Manuals.htm",
      description: ""
    },
    {
      tab: "GERAL",
      label: "Sperryweb",
      href: "https://accesstfa.halliburton.com/,DanaInfo=.asqguv32ljImz32Nwq231vDBEAAZ3ED+",
      description: ""
    },
    {
      tab: "GERAL",
      label: "Docutrack",
      href: "https://accesstfa.halliburton.com/docutrack/ui/,DanaInfo=.adbvdwyuymImz32Nwq231vDBEAAZ3ED+home.aspx",
      description: ""
    },
    {
      tab: "GERAL",
      label: "Datastore",
      href: "https://accesstfa.halliburton.com/datastore/,DanaInfo=.adbvdwyuymImz32Nwq231vDBEAAZ3ED+default.aspx",
      description: ""
    },
    {
      tab: "GERAL",
      label: "EDM",
      href: "https://accesstfa.halliburton.com/SITES/GlobalROCs/SperryEDM/,DanaInfo=.asqyhwyFjw0zKtnz0ysA-B99W0BA+default.aspx",
      description: ""
    },
    {
      tab: "GERAL",
      label: "TSOrders",
      href: "https://accesstfa.halliburton.com/tsorders/,DanaInfo=.attquhjxzx0n+iwexctfm.asp",
      description: "Licensas e softwares"
    },
    {
      tab: "GERAL",
      label: "Funcionário.com",
      href: "https://accesstfa.halliburton.com/Corpore.Net/,DanaInfo=.anq3dtut7.E5+Login.aspx",
      description: ""
    },
    {
      tab: "LOGISTICA",
      label: "ARGO",
      href: "https://ctm.bcdtravel.com.br/bcd/default.aspx?cliente=halliburton",
      description: "Pedido de Hotel e Vôos"
    },
    {
      tab: "GERAL",
      label: "PEAK",
      href: "https://halliburtoncompany.appiancloud.com/suite/sites/sperry/page/home",
      description: ""
    },
    {
      tab: "GERAL",
      label: "EPOD",
      href: "https://accesstfa.halliburton.com/epodcore/,DanaInfo=.adbvdwyuymImz32Nwq231vDBEAAZ3ED,SSL+home",
      description: "Preencher customer satisfaction"
    },
     {
      tab: "GERAL",
      label: "Suporte Insite",
      href: "https://accesstfa.halliburton.com/SITES/sperryINSITEweb/,DanaInfo=.ahbnomg0y1xxK4uo6u6617CVzA.,SSL+default.aspx",
      description: ""
    },
    {
      tab: "GERAL",
      label: "Dados LWD",
      href: "https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fhalliburton.sharepoint.com%2Fsites%2Flasperry%2FBr%2FDados%2520MLWD%2FForms%2FAllItems.aspx%3Fviewpath%3D%252Fsites%252Flasperry%252FBr%252FDados%2520MLWD%252FForms%252FAllItems.aspx&data=04%7C01%7CFelipe.Marinho%40halliburton.com%7C34bb6ce346eb4f93713408d8a1e8b6e4%7Cb7be76866f974db79081a23cf09a96b5%7C0%7C0%7C637437368201078696%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=YqpH2qmn4ByKLVza2n%2FIMvSdcMvj3XbQvJK25I1rbhE%3D&reserved=0",
      description: "Novo Servidor"
    },
    {
      tab: "GERAL",
      label: "OneView",
      href: "https://hal.enablon.com/HALOneView/go.aspx",
      description: "Cartão stop"
    },
    {
      tab: "BR",
      label: "SITAER",
      href: "https://sitaer.petrobras.com.br/",
      description: "Status de Voos BR"
    },
    {
      tab: "OUTROS",
      label: "Halliburton TV",
      href: "https://accesstfa.halliburton.com/,DanaInfo=.awxyClfrsqk42511O9A,SSL+",
      description: ""
    },
    {
      tab: "BR",
      label: "GIS-SUB",
      href: "https://gissub2.petrobras.biz",
      description: "Barcos - Somente rede BR"
    },
    {
      tab: "BR",
      label: "SITOP",
      href: "https://sitop.petrobras.biz/aplicativo/LI04-SITOP",
      description: "Somente rede BR"
    },
    {
      tab: "LOGISTICA",
      label: "LOGÍSTICA (PESSOAL)",
      href: "https://srq.halliburton.7itec.io/login",
      description: "Pesquisar dados da viagem"
    }
];

export default function handler(req, res) {
  const date = new Date(Date.now());
  res.status(200).json({date: date, links})
}
