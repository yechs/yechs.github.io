"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[644],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},132:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={},p="Export Model w/ Weights",l={unversionedId:"AI-engineering/Model-export",id:"AI-engineering/Model-export",title:"Export Model w/ Weights",description:"In some occasions, we need to export the full model (along with the operators, network structures, weights, and biases) so we can run the model using different platforms (e.g. run a pytorch-trained model using OpenCV in C++).",source:"@site/kb/AI-engineering/Model-export.md",sourceDirName:"AI-engineering",slug:"/AI-engineering/Model-export",permalink:"/zh-Hans/kb/AI-engineering/Model-export",editUrl:"https://github.com/yechs/website/edit/master/kb/AI-engineering/Model-export.md",tags:[],version:"current",lastUpdatedAt:1643559577,formattedLastUpdatedAt:"2022/1/30",frontMatter:{},sidebar:"kbSidebar",previous:{title:"LibTorch",permalink:"/zh-Hans/kb/AI-engineering/LibTorch"},next:{title:"C Macros",permalink:"/zh-Hans/kb/software/c-macros"}},c=[{value:"Export From PyTorch",id:"export-from-pytorch",children:[{value:"to TorchScript",id:"to-torchscript",children:[],level:3},{value:"to ONNX",id:"to-onnx",children:[],level:3}],level:2},{value:"Export From Keras",id:"export-from-keras",children:[],level:2},{value:"Inference",id:"inference",children:[{value:"In Python",id:"in-python",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"export-model-w-weights"},"Export Model w/ Weights"),(0,a.kt)("p",null,"In some occasions, we need to export the full model (along with the operators, network structures, weights, and biases) so we can run the model using different platforms (e.g. run a pytorch-trained model using OpenCV in C++)."),(0,a.kt)("p",null,"Here, I shall illustrate how to export the full model into a separate file (TorchScript / TensorFlow SavedModel / ONNX) and how to use them for inference."),(0,a.kt)("h2",{id:"export-from-pytorch"},"Export From PyTorch"),(0,a.kt)("h3",{id:"to-torchscript"},"to TorchScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import torch.jit\n\ntraced_model = torch.jit.trace(model, ((input_tensor)))\ntorch.jit.save(traced_model, 'filename.pt')\n")),(0,a.kt)("h3",{id:"to-onnx"},"to ONNX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import onnx\nprint('\\nStarting ONNX export with onnx %s...' % onnx.__version__)\n\ntorch.onnx.export(model, input_tensor, 'filename.onnx', verbose=False, opset_version=12, input_names=['input'], output_names=['output_1', 'output_2', 'output_3'])\n")),(0,a.kt)("h2",{id:"export-from-keras"},"Export From Keras"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def freeze_session(session, keep_var_names=None, output_names=None, clear_devices=True):\n    """\n    Freezes the state of a session into a pruned computation graph.\n\n    Creates a new computation graph where variable nodes are replaced by\n    constants taking their current value in the session. The new graph will be\n    pruned so subgraphs that are not necessary to compute the requested\n    outputs are removed.\n    @param session The TensorFlow session to be frozen.\n    @param keep_var_names A list of variable names that should not be frozen,\n                          or None to freeze all the variables in the graph.\n    @param output_names Names of the relevant graph outputs.\n    @param clear_devices Remove the device directives from the graph for better portability.\n    @return The frozen graph definition.\n    """\n    graph = session.graph\n    with graph.as_default():\n        freeze_var_names = list(set(v.op.name for v in tf.global_variables()).difference(keep_var_names or []))\n        output_names = output_names or []\n        output_names += [v.op.name for v in tf.global_variables()]\n        input_graph_def = graph.as_graph_def()\n        if clear_devices:\n            for node in input_graph_def.node:\n                node.device = ""\n        frozen_graph = tf.graph_util.convert_variables_to_constants(\n            session, input_graph_def, output_names, freeze_var_names)\n        return frozen_graph\n\n\nfrom tensorflow.keras import backend as K\nimport tensorflow as tf\n\nfrozen_graph = freeze_session(K.get_session(),\n                              output_names=[out.op.name for out in model.model.outputs])\n\ntf.train.write_graph(frozen_graph, ".", "rdn-large-denoise-x2-maxpool.pb", as_text=False)\n')),(0,a.kt)("h2",{id:"inference"},"Inference"),(0,a.kt)("h3",{id:"in-python"},"In Python"),(0,a.kt)("p",null,"To run inference with torchscript model, we can simply load it and run it as any usual model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'tensors_model = torch.jit.load("../filename.pt")\n\ntensora = list(tensors_model.parameters())[0]\ntensorb = list(tensors_model.parameters())[1]\ntensorc = list(tensors_model.parameters())[2]\ntensord = list(tensors_model.parameters())[3]\n\ninput_tensors = (tensora, tensorb, tensorc, tensord)\n\n# TODO\n')))}d.isMDXComponent=!0}}]);