export default {
    project: {
        name: '节点控制台',
        blocks: '区块数量',
        nodes: '节点数量',
        transactions: '交易数量',
        pendingTransactions: '待交易数量',
    },
    route: {
        statistics: '数据概览',
        nodeManagement: '节点管理',
        nodeManagementQ: '节点管理',
        contractManagement: '合约管理',
        contractManagementQ: '合约管理',
        contractIDE: '合约IDE',
        contractList: '合约列表',
        systemMonitoring: '系统监控',
        hostMetrics: '主机指标',
        nodeMetrics: '节点指标',
        privateKeyManagement: '私钥管理',
        privateKeyManagementQ: '私钥管理',
        subscribeEvent: '订阅事件',
        blockEvent: '出块事件',
        contractEvent: '合约事件',
        testUserList: '测试用户',
        abiList: 'ABI列表',
        parseAbi: 'ABI编码',
    },
    navbar: {
        dashboard: '首页',
        github: '项目地址',
        logOut: '退出登录',
        profile: '个人中心',
        theme: '换肤',
        size: '布局大小'
    },
    documentation: {
        documentation: '文档',
        github: 'Github 地址'
    },
    permission: {
        addRole: '新增角色',
        editPermission: '编辑权限',
        roles: '你的权限',
        switchRoles: '切换权限',
        tips: '提示',
        delete: '删除',
        confirm: '确定',
        cancel: '取消'
    },
    components: {
        documentation: '文档',
        tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
        dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
        stickyTips: '当页面滚动到预设的位置会吸附在顶部',
        backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
        backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
        imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
    },
    table: {
        type: '类型',
        search: '搜索',
        addUser: '新增用户',
        importPrivateKey: '导入私钥',
        export: '导出',
        id: '序号',
        date: '时间',
        status: '状态',
        actions: '操作',
        edit: '编辑',
        publish: '发布',
        delete: '删除',
        cancel: '取 消',
        confirm: '确 定',
        nodeId: '节点ID',
        blockHeight: '块高',
        pbftView: 'pbftView',
        run: '运行',
        abnormal: '异常',
        address: '地址',
        publicKey: '公钥',
        user: '用户',
        transactionHash: '交易Hash',
        transactionInfo: '交易信息',
        transactionReceipt: '交易回执',
        contractName: '合约名称',
        contractPath: '合约目录',
        contractAddress: '合约地址',
        contractAbi: '合约abi',
        contractBin: '合约bin',
        createdTime: '创建时间',
        importPem: "导入pem私钥",
        addBlockEvent: "订阅出块事件",
        addContractEvent: "订阅合约事件",
        blockEventInfo: "订阅详情",
        appId: "应用编号",
        exchangeName: "Exchange",
        queueName: "队列名",
        routingKey: "routingKey",
        groupId: "所属群组",
        fromBlock: 'event起始区块',
        toBlock: 'event末区块',
        topicList: '合约event名列表',
        fileType: "文件类型",
        fileName: "私钥用户名",
    },
    errorLog: {
        tips: '请点击右上角bug小图标',
        description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
        documentation: '文档介绍'
    },
    excel: {
        export: '导出',
        selectedExport: '导出已选择项',
        placeholder: '请输入文件名(默认excel-list)',
    },
    zip: {
        export: '导出',
        placeholder: '请输入文件名(默认file)'
    },
    notice: {
        copySuccessfully: '复制成功',
        copyFailure: '值为空，不复制'
    },
    dialog: {
        addUsername: '添加用户名',
        pleaseEnterUserName: '请输入用户名',
        rivateKeyVerifyLength: '长度在 3 到 32 个字符',
        rivateKeyVerifyLength1_32: '长度在 1 到 32 个字符',
        rivateKeyVerifyFont: '只能是数字或者字母组成',
        rename: '重命名',
        newFile: '新建文件',
        delete: '删除',
        exportJavaNote: '注意：合约名和文件名必须相同',
        cancel: '取 消',
        confirm: '确 认',
        sureExport: '确认导出',
        sureDelete: '确认删除',
        contractNameIllegal: '合约名不符合规则',
        folderNameIllegal: '文件名不符合规则',
        folderName: '文件夹名称',
        pleaseType: '请输入',
        appId: "请输入应用编号",
        exchangeName: "请输入交换名",
        queueName: "请输入队列名",
        groupId: "请选择群组",
        contractAbi: "请输入合约Abi",
        contractAddress: "请输入合约地址",
        fromBlock: "请输入event起始区块",
        toBlock: "请输入event末区块",
        topicList: "请输入合约event名列表",
    },
    placeholder: {
        globalSearch: '请输入 Block 或 Txn Hash',
        javaPackage: '如：com.webank',
        selected: '请选择',
        selectedAccountAddress: '请选择用户地址',
        selectedNoUser: '没有用户，请去测试用户处新建用户',
        selectedContractAddress: '请输入合约地址',
        functionName: '方法名',
        contractListSearch: '请输入合约名或合约地址',
        selectedDay: '选择日期',
        selectedTimeRange: '选择时间范围',
        to: '至',
        startTime: '开始时间',
        endTime: '结束时间',
    },
    title: {
        copyHash: '复制哈希',
        copy: '复制',
        copyAddress: '复制地址',
        copyPubliceKey: '复制公钥',
        copyContractAddress: '复制合约地址',
        copyContractName: '复制合约名',
        copyAbi: '复制abi',
        copyBin: '复制bin',
        newFile: '新建文件',
        newFolder: '新建文件夹',
        upload: '上传文件',
        save: '保存',
        compile: '编译',
        deploy: '部署',
        callContract: '合约调用',
        exportJavaFile: '导出java文件',
        handleSave: '按Ctrl+s保存合约内容',
        handleCompile: '按Alt+c 编译合约',
        handleDeploy: '按Alt+d 部署合约',
        handleCallContract: '按Alt+t 合约调用',
        selectAccountAddress: '选择用户地址',
        writeJavaName: '请填写java包名',
        selectDirectory: '选择目录',
        txnContractAddExp: '选填项，导入已部署的合约地址',
        restore: '还原',
        zoom: '区域缩放',
        back: '区域缩放还原',
        stack: '堆叠',
        tiled: '平铺',
        detailsAbi: 'abi详情',
        detailsTxn: '交易内容',
        acquisitionSwitch: '采集数据开关',
        check: '查询',
        detele: '删除',
        uploadSolc: '上传不同版本编译器'
    },
    text: {
        noContract: '请在左侧面板点击打开一个合约或新建一个合约',
        hide: '隐藏',
        expand: '显示',
        compilationFailed: '合约未编译或编译失败',
        compilationSucceeded: '合约编译成功',
        compilationBegin: '合约开始编译',
        compiling: '合约编译中...',
        contractFileName: '合约名和文件名要保持一致',
        saveFailed: '保存失败！',
        saveSucceeded: '保存成功！',
        deploySucceeded: '部署成功',
        deployFailed: '部署失败！',
        redeploy: '合约已被修改，请重新部署！',
        systemError: '系统错误',
        contractSameDirectory: '同一目录下不能存在同名合约',
        unsavedContract: '合约未保存是否保存',
        contractName: '合约名称',
        filePath: '文件目录',
        pleaseEnter: '请输入',
        errorNewFolderName: '新建文件夹与已存在的文件夹名称相同',
        contractAddress: '合约地址',
        acountAddress: '私钥地址',
        parame: '参数',
        deployParameVec: '如果参数类型是数组，请用逗号分隔，不需要加上引号，例如：arry1,arry2。string等其他类型也不用加上引号。',
        searchSucceeded: '查询成功',
        txnSucceeded: '交易成功',
        txnFailed: '交易失败',
        sendFailed: '发送交易失败',
        sendFunction: '方法',
        showDate: '显示日期',
        comparingDate: '对比日期',
        fromTo: '起止时间',
        dataGranularity: '数据粒度',
        minutes: '分钟',
        seconds: '秒钟',
        confirm: '确认',
        confirmDelete: "确认删除？",
        usage: '利用率',
        hardDisk: '硬盘',
        memory: '内存',
        uplink: '上行',
        downlink: '下行',
        bandwidth: '带宽',
        blockHeight: '区块高度',
        pendingTransactions: '待打包的交易数',
        comparingByDay: '对比日数据',
        noMetrics: '未采集到数据或者数据为0',
        showByDay: '显示日数据',
        searchEmpty: '查询结果为空',
        noData: '暂无数据',
        importSuccessed: '导入成功',
        updateSuccess: '成功',
        importFailed: '导入失败',
        addUserSuccessed: '新增成功',
        deleteUserSuccessed: '删除成功',
        nameNoSame: '用户名不能相同',
        uploadSol: '请上传.sol格式的文件',
        fileExceeds: '文件大小超过400k，请上传小于400k的文件',
        txnDecodeBtn: '解码',
        txnEncodeBtn: '还原',
        toggleSuccessed: '切换成功',
        toggleFailed: '切换失败',
        toggleOpen: '打开',
        toggleDown: '关闭',
        privateKeyManagementInfo: "支持导出私钥，可以将私钥导出到本地",
        fileName: "私钥用户名",
        importFile: "导入文件",
        pemName: "pem 文件名称",
        appId: "注册事件通知的应用的唯一编号",
        exchangeName: "队列所属交换机",
        queueName: "队列名，一般以appId作队列名",
        contractAbi: "合约的ABI，用于合约event解析,list类型,如[HelloWorld(string)]",
        contractAddress: "合约地址",
        fromBlock: "最小值为0；默认值latest，表示监听最新区块",
        toBlock: "最小值为0；默认值latest，表示监听最新区块",
        topicList: "合约Event事件的List，Event参数之间不带空格，且多个Event以英文分号(;)相隔；如 SetEvent(string,string);TransferEvent(address,uint)",
        parse: '解析',
        remove: '移除',
        addParameter: "添加参数",
        functionType: "函数名",
        argument: "参数",
        copy: "复制",
        parseTitle: "请输入合约ABI",
        parseAbiManually: "函数ABI编辑",
        addAbi: "导入ABI",
    },
    contracts: {
        createFile: "新建文件",
        createFolder: "新建文件夹",
        upLoadFile: "上传文件",
        contractTips: "群组内部署的合约都需要在合约管理里添加，编译保存，否则会判断为异常合约。",
        rename: "重命名",
        contractCompileSuccess: "合约编译成功！",
        contractCompileFail: "合约编译失败！",
        renameFail: "已部署的合约不能重新命名！",
        nameFail: "同目录下存在相同的合约，请重新命名!",
        contractLong: "请输入数字或字母,长度为1到32位！",
        contractSize: "文件大小超过400k，请上传小于400k的文件!",
        contractType: "请上传.sol格式的文件!",
        contractNameSameFail: "同一目录下不能存在同名合约!",
        contractSaveSuccess: "合约保存成功！",
        contractDeleteFail: "文件夹内存在已部署的合约，无法删除文件夹!",
        contractSaveTips: "按Ctrl+s保存合约内容",
        contractOpenTips: "请在左侧面板点击打开一个合约或新建一个合约",
        sendTransaction: "发送交易",
        changeUser: "选择用户",
        compileSuccess: "< 编译成功！",
        conmileNameError: "合约名和文件名要保持一致!",
        deploySuccess: "< 部署成功！",
        contractDeploySuccess: "合约部署成功！",
        contractName: "合约名称",
        filePath: "文件目录",
        folderName: "文件夹名称",
        folderSameFail: "新建文件夹与已存在的文件夹名称相同",
        user: "用户",
        params: "参数",
        paramsInfo: '如果参数类型是数组，请按照以下格式输入，以逗号分隔，非数值和布尔值须使用双引号，例如：["aaa","bbb"]和[100,101]；如果数组参数包含双引号，需转义，例如：["aaa\\"bbb","ccc"]。',
        contractAddress: "合约地址",
        method: "方法",
        contractAddressInput: "请输入合约地址",
        contractAddressInfo: "选填项，导入已部署的合约地址。",
        selectUser: "请选择用户",
        methodType: "方法类型",
        methodName: "方法名",
        contractCatalogue: "合约目录",
        copyContractAddress: "复制合约地址",
        contractAbi: "合约abi",
        contractBin: "合约bin",
        runtimeBin: "Runtime-bin",
        copyContractAbi: "复制合约abi",
        copyContractBin: "复制合约bin",
        abiInfo: "abi详情",
        contractVersion: "合约版本",
        adminUser: '管理员账号',
        createTable: "创建表",
        insertTable: "插入表记录",
        searchTable: "查询表记录",
        updateTable: "更新表记录",
        deleteTable: "删除表记录",
        tableDetail: "显示表详情",
        addPrivateKeyInfo: "请添加私钥用户!",
        updateAbi: "更新",
        deleteAbi: "删除",
        operation: "操作",
        limit_1: "每次最多只能上传一个文件"
    },
    rule: {
        textLong: "长度在 1 到 32 个字符",
        textLong1_12: "长度在 1 到 12 位",
        textLong1_32767: "必须小于或等于32767",
        passwordError: "登录密码错误",
        loginPasswordType: "请正确输入密码",
        ipName: "请输入ip名称",
        ipRule: "ip不符合规则",
        portName: "请输入端口名称",
        portLong: "长度在 1 到 12 个数字",
        portRule: "端口不符合规则",
        agencyName: "请输入机构名称",
        agencyLong: "长度在 1 到 16 位",
        agencyRule: "机构名称请输入中文、英文和数字",
        adminRule: "请选择管理员账号",
        nodeType: "请选择节点类型",
        contractName: "请输入合约名称",
        contractAddress: "请输入合约地址",
        contractAbi: "请输入合约ABI",
        contractLong: "长度在 1 到 32 个字符",
        contractRule: "合约名不符合规则",
        folderName: "请输入文件夹名称",
        folderLong: "长度在 1 到 12 个字符",
        folderRule: "文件夹名不符合规则",
        selectAdmin: "请选择管理员",
        sqlRule: "请输入sql",
        outUserAddress: "请选择外部账号地址",
        configName: "请选择配置名称",
        configValue: "请输入配置值",
        configValueNumber: "配置值必须为数字",
        accountRule: "用户名只能输入字母和数字",
        passwordLong: "长度在 6 到 12 个字符",
        passwordRule: "字母,数字组成,且至少包含一个大写字母和一个小写字母",
        groupTimestamp: "请输入创世块时间戳",
        nodeIdList: "请输入节点列表",
        number: "请输入数字",
        groupId: "请输入群组编号",
        correctJson: "输入正确的JSON"
    },
    nodes: {
        nodeFront: "节点前置",
        addFront: "新增节点前置",
        frontId: "前置编号",
        ip: "ip",
        frontPort: "前置端口",
        agency: "所属机构",
        modifyTime: "修改时间",
        nodeStyle: "节点类型",
        operation: "操作",
        sealer: "共识",
        observer: "观察",
        remove: "游离",
        deleteNode: "删除节点",
        nodeList: "节点列表",
        nodeDescription: "节点管理说明：可以通过节点管理设置节点类型。包括：1、根据节点NodeID设置对应节点为共识节点。2、 根据节点NodeID设置对应节点为观察节点。3、根据节点NodeID设置对应节点为游离节点。",
        updateNodesType: "修改节点类型",
        frontConfig: "节点前置配置",
        addFrontSuccessMsg: "添加前置成功",
        addFrontErrMsg: "添加前置失败",
        admin: "管理员账号",
        observerText: "设置为观察节点，节点将不参与共识",
        removeText: "设置为游离节点，节点将不参与共识和同步",
        sealerText: "设置为共识节点，节点将参与共识。请联系专业人员设置",
        version: "节点版本",
        addGroup: "创建群组",
        groupId: "群组编号",
        groupName: "群组名称",
        nodeCount: "节点数量",
        createTime: "创建时间",
        nodeId: "节点编号",
        frontIp: "前置IP",
        modifyGroup: "修改群组",
        addAbi: "导入ABI",
        groupStatus: "群组状态",
        status: "状态",
        groupTimestamp: "创世块时间戳"
    },
    privateKey: {
        addUser: "新增用户",
        importRivateKey: "导入私钥",
        addUserTips: "群组内发送交易的账号都需要在私钥管理里添加，否则会判断为异常用户。",
        searchUser: "请输入用户名或公钥地址",
        copyPublicKey: "复制公钥",
        privateKey: "私钥",
        publicKey: "公钥",
        createUser: "新建用户",
        userName: "用户名称",
        userId: "用户ID",
        description: "用户描述",
        userAddress: "用户公钥地址信息",
        userStatus: "用户状态",
        inputDescription: "请输入用户描述",
        updateUserSuccess: "修改用户成功",
        normal: "正常",
        disable: "停用",
        privateKeyUser: "私钥用户",
        publicKeyUser: "公钥用户",
        publicKeyInfo: "公钥信息",
        inputUserName: "请输入用户名称",
        inputPublicInfo: "请输入公钥信息或公钥地址",
        userLong: "120个字符以内",
        inputPublic: "请输入公钥信息",
        addUserSuccess: "添加用户成功！",
        addUserFail: "添加用户失败！",
        signUserId: 'Sign User Id',
        inputFileName: "请输入私钥用户名",
        inputFileType: "请选择文件类型",
        fileName: "私钥用户名",
        fileType: "文件类型",
        importFile: "选择文件",
        copy: "复制",
        password: "密码",
        placeholderPassword: "请输入密码",
        passwordError: "密码不能是汉字",
        file: "文件",
    },
}
