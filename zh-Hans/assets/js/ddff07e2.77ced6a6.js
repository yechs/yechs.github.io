"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[644],{5690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=t(5893),o=t(1151);const s={},a="Export Model w/ Weights",i={id:"AI-engineering/Model-export",title:"Export Model w/ Weights",description:"In some occasions, we need to export the full model (along with the operators, network structures, weights, and biases) so we can run the model using different platforms (e.g. run a pytorch-trained model using OpenCV in C++).",source:"@site/kb/AI-engineering/Model-export.md",sourceDirName:"AI-engineering",slug:"/AI-engineering/Model-export",permalink:"/zh-Hans/kb/AI-engineering/Model-export",draft:!1,unlisted:!1,editUrl:"https://github.com/yechs/website/edit/master/kb/AI-engineering/Model-export.md",tags:[],version:"current",lastUpdatedAt:1643559577,formattedLastUpdatedAt:"2022\u5e741\u670830\u65e5",frontMatter:{},sidebar:"kbSidebar",previous:{title:"LibTorch",permalink:"/zh-Hans/kb/AI-engineering/LibTorch"}},l={},p=[{value:"Export From PyTorch",id:"export-from-pytorch",level:2},{value:"to TorchScript",id:"to-torchscript",level:3},{value:"to ONNX",id:"to-onnx",level:3},{value:"Export From Keras",id:"export-from-keras",level:2},{value:"Inference",id:"inference",level:2},{value:"In Python",id:"in-python",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"export-model-w-weights",children:"Export Model w/ Weights"}),"\n",(0,r.jsx)(n.p,{children:"In some occasions, we need to export the full model (along with the operators, network structures, weights, and biases) so we can run the model using different platforms (e.g. run a pytorch-trained model using OpenCV in C++)."}),"\n",(0,r.jsx)(n.p,{children:"Here, I shall illustrate how to export the full model into a separate file (TorchScript / TensorFlow SavedModel / ONNX) and how to use them for inference."}),"\n",(0,r.jsx)(n.h2,{id:"export-from-pytorch",children:"Export From PyTorch"}),"\n",(0,r.jsx)(n.h3,{id:"to-torchscript",children:"to TorchScript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import torch.jit\n\ntraced_model = torch.jit.trace(model, ((input_tensor)))\ntorch.jit.save(traced_model, 'filename.pt')\n"})}),"\n",(0,r.jsx)(n.h3,{id:"to-onnx",children:"to ONNX"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import onnx\nprint('\\nStarting ONNX export with onnx %s...' % onnx.__version__)\n\ntorch.onnx.export(model, input_tensor, 'filename.onnx', verbose=False, opset_version=12, input_names=['input'], output_names=['output_1', 'output_2', 'output_3'])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"export-from-keras",children:"Export From Keras"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def freeze_session(session, keep_var_names=None, output_names=None, clear_devices=True):\n    """\n    Freezes the state of a session into a pruned computation graph.\n\n    Creates a new computation graph where variable nodes are replaced by\n    constants taking their current value in the session. The new graph will be\n    pruned so subgraphs that are not necessary to compute the requested\n    outputs are removed.\n    @param session The TensorFlow session to be frozen.\n    @param keep_var_names A list of variable names that should not be frozen,\n                          or None to freeze all the variables in the graph.\n    @param output_names Names of the relevant graph outputs.\n    @param clear_devices Remove the device directives from the graph for better portability.\n    @return The frozen graph definition.\n    """\n    graph = session.graph\n    with graph.as_default():\n        freeze_var_names = list(set(v.op.name for v in tf.global_variables()).difference(keep_var_names or []))\n        output_names = output_names or []\n        output_names += [v.op.name for v in tf.global_variables()]\n        input_graph_def = graph.as_graph_def()\n        if clear_devices:\n            for node in input_graph_def.node:\n                node.device = ""\n        frozen_graph = tf.graph_util.convert_variables_to_constants(\n            session, input_graph_def, output_names, freeze_var_names)\n        return frozen_graph\n\n\nfrom tensorflow.keras import backend as K\nimport tensorflow as tf\n\nfrozen_graph = freeze_session(K.get_session(),\n                              output_names=[out.op.name for out in model.model.outputs])\n\ntf.train.write_graph(frozen_graph, ".", "rdn-large-denoise-x2-maxpool.pb", as_text=False)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"inference",children:"Inference"}),"\n",(0,r.jsx)(n.h3,{id:"in-python",children:"In Python"}),"\n",(0,r.jsx)(n.p,{children:"To run inference with torchscript model, we can simply load it and run it as any usual model"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'tensors_model = torch.jit.load("../filename.pt")\n\ntensora = list(tensors_model.parameters())[0]\ntensorb = list(tensors_model.parameters())[1]\ntensorc = list(tensors_model.parameters())[2]\ntensord = list(tensors_model.parameters())[3]\n\ninput_tensors = (tensora, tensorb, tensorc, tensord)\n\n# TODO\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(7294);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);