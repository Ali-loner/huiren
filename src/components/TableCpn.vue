<template>
  <div>
    <div class="table-box">
      <div class="lf-1">
        <table width="100%" border="1">
          <tr>
            <th rowspan="2" colspan="2">用户基本信息</th>
            <th colspan="2">用户历史对话记录</th>
            <td class="grey" rowspan="2">
              <div class="title">人工审核修订记录</div>
              <div>（时间12:00-12:00）</div>
            </td>
            <th rowspan="2">
              <div>用户当前对话更新时间</div>
              <div>（时间12:00-12:00）</div>
            </th>
          </tr>
          <tr>
            <td class="grey">对话记录1（时间12:00-12:00）</td>
            <td class="grey">对话记录2（时间12:00-12:00）</td>
          </tr>
          <tr>
            <th rowspan="5">
              <el-button size="mini" @click="delInfo">Reset</el-button>
              <div class="contact">联系方式</div>
            </th>
            <td class="white text-left">姓名</td>
            <td>{{ oldContact1.name }}</td>
            <td>{{ oldContact2.name }}</td>
            <td></td>
            <td class="yellow">{{ contact.name }}</td>
          </tr>
          <tr>
            <td class="white text-left">年龄</td>
            <td>{{ oldContact1.age }}</td>
            <td>{{ oldContact2.age }}</td>
            <td></td>
            <td class="yellow">{{ contact.age }}</td>
          </tr>
          <tr>
            <td class="white text-left">手机号</td>
            <td>{{ oldContact1.phoneNumber }}</td>
            <td>{{ oldContact2.phoneNumber }}</td>
            <td></td>
            <td class="yellow">{{ contact.phoneNumber }}</td>
          </tr>
          <tr>
            <td class="white text-left">微信号</td>
            <td>{{ oldContact1.wechatId }}</td>
            <td>{{ oldContact2.wechatId }}</td>
            <td></td>
            <td class="yellow">{{ contact.wechatId }}</td>
          </tr>
          <tr>
            <td class="white text-left">快递地址</td>
            <td>{{ oldContact1.address }}</td>
            <td>{{ oldContact2.address }}</td>
            <td></td>
            <td class="yellow">{{ contact.address }}</td>
          </tr>
          <tr>
            <th rowspan="14">基础症状</th>
            <td class="white text-left">汇仁产品适应症状1</td>
            <td>{{ oldBasicConditions1.huiRenProductConditions?.[0] }}</td>
            <td>{{ oldBasicConditions2.huiRenProductConditions?.[0] }}</td>
            <td></td>
            <td class="yellow">
              {{ basicConditions.huiRenProductConditions?.[0] }}
            </td>
          </tr>
          <tr>
            <td class="white text-left">汇仁产品适应症状2</td>
            <td>{{ oldBasicConditions1.huiRenProductConditions?.[1] }}</td>
            <td>{{ oldBasicConditions2.huiRenProductConditions?.[1] }}</td>
            <td></td>
            <td class="yellow">
              {{ basicConditions.huiRenProductConditions?.[1] }}
            </td>
          </tr>
          <tr>
            <td class="white text-left">汇仁产品适应症状3</td>
            <td>{{ oldBasicConditions1.huiRenProductConditions?.[2] }}</td>
            <td>{{ oldBasicConditions2.huiRenProductConditions?.[2] }}</td>
            <td></td>
            <td class="yellow">
              {{ basicConditions.huiRenProductConditions?.[2] }}
            </td>
          </tr>
          <tr>
            <td class="white text-left">汇仁产品适应症状4</td>
            <td>{{ oldBasicConditions1.huiRenProductConditions?.[3] }}</td>
            <td>{{ oldBasicConditions2.huiRenProductConditions?.[3] }}</td>
            <td></td>
            <td class="yellow">
              {{ basicConditions.huiRenProductConditions?.[3] }}
            </td>
          </tr>
          <tr>
            <td class="white text-left">汇仁产品适应症状5</td>
            <td>{{ oldBasicConditions1.huiRenProductConditions?.[4] }}</td>
            <td>{{ oldBasicConditions2.huiRenProductConditions?.[4] }}</td>
            <td></td>
            <td class="yellow">
              {{ basicConditions.huiRenProductConditions?.[4] }}
            </td>
          </tr>
          <tr>
            <td class="white text-left">非汇仁产品适应症状1</td>
            <td>{{ oldBasicConditions1.nonHuiRenProductConditions?.[0] }}</td>
            <td>{{ oldBasicConditions2.nonHuiRenProductConditions?.[0] }}</td>
            <td></td>
            <td class="yellow">
              {{ basicConditions.nonHuiRenProductConditions?.[0] }}
            </td>
          </tr>
          <tr>
            <td class="white text-left">非汇仁产品适应症状2</td>
            <td>{{ oldBasicConditions1.nonHuiRenProductConditions?.[1] }}</td>
            <td>{{ oldBasicConditions2.nonHuiRenProductConditions?.[1] }}</td>
            <td></td>
            <td class="yellow">
              {{ basicConditions.nonHuiRenProductConditions?.[1] }}
            </td>
          </tr>
          <tr>
            <td class="white text-left">非汇仁产品适应症状3</td>
            <td>{{ oldBasicConditions1.nonHuiRenProductConditions?.[2] }}</td>
            <td>{{ oldBasicConditions2.nonHuiRenProductConditions?.[2] }}</td>
            <td></td>
            <td class="yellow">
              {{ basicConditions.nonHuiRenProductConditions?.[2] }}
            </td>
          </tr>
          <tr>
            <td class="white text-left">非汇仁产品适应症状4</td>
            <td>{{ oldBasicConditions1.nonHuiRenProductConditions?.[3] }}</td>
            <td>{{ oldBasicConditions2.nonHuiRenProductConditions?.[3] }}</td>
            <td></td>
            <td class="yellow">
              {{ basicConditions.nonHuiRenProductConditions?.[3] }}
            </td>
          </tr>
          <tr>
            <td class="white text-left">非汇仁产品适应症状5</td>
            <td>{{ oldBasicConditions1.nonHuiRenProductConditions?.[4] }}</td>
            <td>{{ oldBasicConditions2.nonHuiRenProductConditions?.[4] }}</td>
            <td></td>
            <td class="yellow">
              {{ basicConditions.nonHuiRenProductConditions?.[4] }}
            </td>
          </tr>
          <tr>
            <td class="white text-left">禁忌症</td>
            <td>{{ oldBasicConditions1.contraindications }}</td>
            <td>{{ oldBasicConditions2.contraindications }}</td>
            <td></td>
            <td class="yellow">{{ basicConditions.contraindications }}</td>
          </tr>
          <tr>
            <td class="white text-left">血压指标</td>
            <td>{{ oldBasicConditions1.bloodPressure }}</td>
            <td>{{ oldBasicConditions2.bloodPressure }}</td>
            <td></td>
            <td class="yellow">{{ basicConditions.bloodPressure }}</td>
          </tr>
          <tr>
            <td class="white text-left">血糖指标</td>
            <td>{{ oldBasicConditions1.bloodSugar }}</td>
            <td>{{ oldBasicConditions2.bloodSugar }}</td>
            <td></td>
            <td class="yellow">{{ basicConditions.bloodSugar }}</td>
          </tr>
          <tr>
            <td class="white text-left">血脂指标</td>
            <td>{{ oldBasicConditions1.bloodFat }}</td>
            <td>{{ oldBasicConditions2.bloodFat }}</td>
            <td></td>
            <td class="yellow">{{ basicConditions.bloodFat }}</td>
          </tr>
          <tr>
            <th rowspan="8">决策要素</th>
            <td class="white text-left">婚姻情况</td>
            <td>{{ oldDecisionFactors1.maritalStatus }}</td>
            <td>{{ oldDecisionFactors2.maritalStatus }}</td>
            <td></td>
            <td class="yellow">{{ decisionFactors.maritalStatus }}</td>
          </tr>
          <tr>
            <td class="white text-left">职业</td>
            <td>{{ oldDecisionFactors1.occupation }}</td>
            <td>{{ oldDecisionFactors2.occupation }}</td>
            <td></td>
            <td class="yellow">{{ decisionFactors.occupation }}</td>
          </tr>
          <tr>
            <td class="white text-left">教育情况</td>
            <td>{{ oldDecisionFactors1.educationLevel }}</td>
            <td>{{ oldDecisionFactors2.educationLevel }}</td>
            <td></td>
            <td class="yellow">{{ decisionFactors.educationLevel }}</td>
          </tr>
          <tr>
            <td class="white text-left">购买主体</td>
            <td>{{ oldDecisionFactors1.purchasingAgent }}</td>
            <td>{{ oldDecisionFactors2.purchasingAgent }}</td>
            <td></td>
            <td class="yellow">{{ decisionFactors.purchasingAgent }}</td>
          </tr>
          <tr>
            <td class="white text-left">经济条件</td>
            <td>{{ oldDecisionFactors1.economicConditions }}</td>
            <td>{{ oldDecisionFactors2.economicConditions }}</td>
            <td></td>
            <td class="yellow">{{ decisionFactors.economicConditions }}</td>
          </tr>
          <tr>
            <td class="white text-left">购买影响圈层</td>
            <td>{{ oldDecisionFactors1.purchasingInfluencers }}</td>
            <td>{{ oldDecisionFactors2.purchasingInfluencers }}</td>
            <td></td>
            <td class="yellow">{{ decisionFactors.purchasingInfluencers }}</td>
          </tr>
          <tr>
            <td class="white text-left">智力</td>
            <td>{{ oldDecisionFactors1.intelligence }}</td>
            <td>{{ oldDecisionFactors2.intelligence }}</td>
            <td></td>
            <td class="yellow">{{ decisionFactors.intelligence }}</td>
          </tr>
          <tr>
            <td class="white text-left">性格</td>
            <td>{{ oldDecisionFactors1.personality }}</td>
            <td>{{ oldDecisionFactors2.personality }}</td>
            <td></td>
            <td class="yellow">{{ decisionFactors.personality }}</td>
          </tr>
        </table>
      </div>
      <div class="lf-2">
        <table width="100%" border="1">
          <tr>
            <th colspan="15">
              <div class="table-title">
                <div>用户历史产品购买与敏感度记录</div>
                <div>对话记录1（时间12:00-12:00）</div>
              </div>
            </th>
          </tr>
          <tr>
            <th rowspan="2" class="grey">产品名</th>
            <td rowspan="2" class="grey">产品单价</td>
            <td rowspan="2" class="grey">产品数量</td>
            <td rowspan="2" class="grey">产品总价</td>
            <td colspan="3" class="grey">产品功效</td>
            <td colspan="3" class="grey">产品价格</td>
            <td colspan="3" class="grey">产品服务</td>
            <td rowspan="2" class="grey">攻单次数</td>
            <td rowspan="2" class="grey">整体评价</td>
          </tr>
          <tr>
            <td class="grey">关注点</td>
            <td class="grey">决策情绪</td>
            <td class="grey">投诉记录</td>
            <td class="grey">关注点</td>
            <td class="grey">决策情绪</td>
            <td class="grey">投诉记录</td>
            <td class="grey">关注点</td>
            <td class="grey">决策情绪</td>
            <td class="grey">投诉记录</td>
          </tr>
          <tr>
            <td>汇仁六位地黄丸</td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")?.unitPrice
              }}
            </td>
            <td>
              {{ getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")?.quantity }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")?.totalPrice
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")
                  ?.productEffect?.focusPoints
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")
                  ?.productEffect?.decisionMood?.[0]
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")
                  ?.productEffect?.complaintRecord
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")?.productPrice
                  ?.focusPoints
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")?.productPrice
                  ?.decisionMood?.[0]
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")?.productPrice
                  ?.complaintRecord
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")
                  ?.productService?.focusPoints
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")
                  ?.productService?.decisionMood?.[0]
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")
                  ?.productService?.complaintRecord
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")
                  ?.promotionAttempts
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁六位地黄丸")
                  ?.overallRating
              }}
            </td>
          </tr>
          <tr>
            <td>汇仁肾宝片</td>
            <td>
              {{ getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.unitPrice }}
            </td>
            <td>
              {{ getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.quantity }}
            </td>
            <td>
              {{ getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.totalPrice }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.productEffect
                  ?.focusPoints
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.productEffect
                  ?.decisionMood?.[0]
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.productEffect
                  ?.complaintRecord
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.productPrice
                  ?.focusPoints
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.productPrice
                  ?.decisionMood?.[0]
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.productPrice
                  ?.complaintRecord
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.productService
                  ?.focusPoints
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.productService
                  ?.decisionMood?.[0]
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.productService
                  ?.complaintRecord
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")
                  ?.promotionAttempts
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁肾宝片")?.overallRating
              }}
            </td>
          </tr>
          <tr>
            <td>汇仁引阳索</td>
            <td>
              {{ getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.unitPrice }}
            </td>
            <td>
              {{ getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.quantity }}
            </td>
            <td>
              {{ getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.totalPrice }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.productEffect
                  ?.focusPoints
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.productEffect
                  ?.decisionMood?.[0]
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.productEffect
                  ?.complaintRecord
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.productPrice
                  ?.focusPoints
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.productPrice
                  ?.decisionMood?.[0]
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.productPrice
                  ?.complaintRecord
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.productService
                  ?.focusPoints
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.productService
                  ?.decisionMood?.[0]
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.productService
                  ?.complaintRecord
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")
                  ?.promotionAttempts
              }}
            </td>
            <td>
              {{
                getMedinice(oldPurchaseHistory1, "汇仁引阳索")?.overallRating
              }}
            </td>
          </tr>
        </table>

        <table width="100%" border="1">
          <tr>
            <th colspan="15">
              <div class="table-title">
                <div>用户历史产品购买与敏感度记录</div>
                <div>对话记录1（时间12:00-12:00）</div>
              </div>
            </th>
          </tr>
          <tr>
            <td class="grey">产品名</td>
            <td class="grey">产品单价</td>
            <td class="grey">产品数量</td>
            <td class="grey">产品总价</td>
            <td colspan="3" class="grey">产品功效</td>
            <td colspan="3" class="grey">产品价格</td>
            <td colspan="3" class="grey">产品服务</td>
            <td rowspan="2" class="grey">攻单次数</td>
            <td rowspan="2" class="grey">整体评价</td>
          </tr>
          <tr>
            <td class="grey"></td>
            <td class="grey"></td>
            <td class="grey"></td>
            <td class="grey"></td>
            <td class="grey">关注点</td>
            <td class="grey">决策情绪</td>
            <td class="grey">投诉记录</td>
            <td class="grey">关注点</td>
            <td class="grey">决策情绪</td>
            <td class="grey">投诉记录</td>
            <td class="grey">关注点</td>
            <td class="grey">决策情绪</td>
            <td class="grey">投诉记录</td>
          </tr>
          <tr>
            <td class="yellow">汇仁六位地黄丸</td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁六位地黄丸")?.unitPrice }}
            </td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁六位地黄丸")?.quantity }}
            </td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁六位地黄丸")?.totalPrice }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")?.productEffect
                  ?.focusPoints
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")?.productEffect
                  ?.decisionMood?.[0]
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")?.productEffect
                  ?.complaintRecord
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")?.productPrice
                  ?.focusPoints
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")?.productPrice
                  ?.decisionMood?.[0]
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")?.productPrice
                  ?.complaintRecord
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")?.productService
                  ?.focusPoints
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")?.productService
                  ?.decisionMood?.[0]
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")?.productService
                  ?.complaintRecord
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")
                  ?.promotionAttempts
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁六位地黄丸")?.overallRating
              }}
            </td>
          </tr>
          <tr>
            <td class="yellow">汇仁肾宝片</td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁肾宝片")?.unitPrice }}
            </td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁肾宝片")?.quantity }}
            </td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁肾宝片")?.totalPrice }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁肾宝片")?.productEffect
                  ?.focusPoints
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁肾宝片")?.productEffect
                  ?.decisionMood?.[0]
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁肾宝片")?.productEffect
                  ?.complaintRecord
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁肾宝片")?.productPrice
                  ?.focusPoints
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁肾宝片")?.productPrice
                  ?.decisionMood?.[0]
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁肾宝片")?.productPrice
                  ?.complaintRecord
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁肾宝片")?.productService
                  ?.focusPoints
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁肾宝片")?.productService
                  ?.decisionMood?.[0]
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁肾宝片")?.productService
                  ?.complaintRecord
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁肾宝片")?.promotionAttempts
              }}
            </td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁肾宝片")?.overallRating }}
            </td>
          </tr>
          <tr>
            <td class="yellow">汇仁引阳索</td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁引阳索")?.unitPrice }}
            </td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁引阳索")?.quantity }}
            </td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁引阳索")?.totalPrice }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁引阳索")?.productEffect
                  ?.focusPoints
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁引阳索")?.productEffect
                  ?.decisionMood?.[0]
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁引阳索")?.productEffect
                  ?.complaintRecord
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁引阳索")?.productPrice
                  ?.focusPoints
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁引阳索")?.productPrice
                  ?.decisionMood?.[0]
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁引阳索")?.productPrice
                  ?.complaintRecord
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁引阳索")?.productService
                  ?.focusPoints
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁引阳索")?.productService
                  ?.decisionMood?.[0]
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁引阳索")?.productService
                  ?.complaintRecord
              }}
            </td>
            <td class="yellow">
              {{
                getMedinice(purchaseHistory, "汇仁引阳索")?.promotionAttempts
              }}
            </td>
            <td class="yellow">
              {{ getMedinice(purchaseHistory, "汇仁引阳索")?.overallRating }}
            </td>
          </tr>
        </table>

        <div style="display: flex">
          <div class="table-two">
            <table class="esp" border="1">
              <tr>
                <th colspan="5">
                  <div class="table-title">对话记录1（时间12:00-12:00）</div>
                </th>
                <th colspan="4">
                  <div class="table-title">用户当前对话分析（动态更新）</div>
                </th>
              </tr>
              <tr>
                <th rowspan="2">外挂知识库成功率</th>
                <th colspan="2">用户问题解答成功</th>
                <th colspan="2">用户问题解答失败</th>
                <th colspan="2">用户问题解答成功</th>
                <th colspan="2">用户问题解答失败</th>
              </tr>
              <tr>
                <td class="grey">内容</td>
                <td class="grey">次数</td>
                <td class="grey">内容</td>
                <td class="grey">次数</td>
                <td class="grey">内容</td>
                <td class="grey">次数</td>
                <td class="grey">内容</td>
                <td class="grey">次数</td>
              </tr>
              <tr>
                <td class="grey">标准话术节点库</td>
                <td>{{ oldStandardTechnicalPoints1.success }}</td>
                <td>{{ oldStandardTechnicalPoints1.successCount }}</td>
                <td>{{ oldStandardTechnicalPoints1.failure }}</td>
                <td>{{ oldStandardTechnicalPoints1.failureCount }}</td>
                <td class="yellow">{{ standardTechnicalPoints.success }}</td>
                <td class="yellow">
                  {{ standardTechnicalPoints.successCount }}
                </td>
                <td class="yellow">{{ standardTechnicalPoints.failure }}</td>
                <td class="yellow">
                  {{ standardTechnicalPoints.failureCount }}
                </td>
              </tr>
              <tr>
                <td class="grey">汇仁医学知识</td>
                <td>{{ oldHuiRenMedicalKnowledge1.success }}</td>
                <td>{{ oldHuiRenMedicalKnowledge1.successCount }}</td>
                <td>{{ oldHuiRenMedicalKnowledge1.failure }}</td>
                <td>{{ oldHuiRenMedicalKnowledge1.failureCount }}</td>
                <td class="yellow">{{ huiRenMedicalKnowledge.success }}</td>
                <td class="yellow">
                  {{ huiRenMedicalKnowledge.successCount }}
                </td>
                <td class="yellow">{{ huiRenMedicalKnowledge.failure }}</td>
                <td class="yellow">
                  {{ huiRenMedicalKnowledge.failureCount }}
                </td>
              </tr>
              <tr>
                <td class="grey">汇仁产品知识</td>
                <td>{{ oldHuiRenProductKnowledge1.success }}</td>
                <td>{{ oldHuiRenProductKnowledge1.successCount }}</td>
                <td>{{ oldHuiRenProductKnowledge1.failure }}</td>
                <td>{{ oldHuiRenProductKnowledge1.failureCount }}</td>
                <td class="yellow">{{ huiRenProductKnowledge.success }}</td>
                <td class="yellow">
                  {{ huiRenProductKnowledge.successCount }}
                </td>
                <td class="yellow">{{ huiRenProductKnowledge.failure }}</td>
                <td class="yellow">
                  {{ huiRenProductKnowledge.failureCount }}
                </td>
              </tr>
              <tr>
                <td class="grey">汇仁企业知识</td>
                <td>{{ oldHuiRenCompanyKnowledge1.success }}</td>
                <td>{{ oldHuiRenCompanyKnowledge1.successCount }}</td>
                <td>{{ oldHuiRenCompanyKnowledge1.failure }}</td>
                <td>{{ oldHuiRenCompanyKnowledge1.failureCount }}</td>
                <td class="yellow">{{ huiRenCompanyKnowledge.success }}</td>
                <td class="yellow">
                  {{ huiRenCompanyKnowledge.successCount }}
                </td>
                <td class="yellow">{{ huiRenCompanyKnowledge.failure }}</td>
                <td class="yellow">
                  {{ huiRenCompanyKnowledge.failureCount }}
                </td>
              </tr>
              <!-- <tr>
            <td class="grey">社交闲聊知识</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="yellow"></td>
            <td class="yellow"></td>
            <td class="yellow"></td>
            <td class="yellow"></td>
          </tr> -->
              <!-- <tr>
              <th rowspan="2">用户异常信息记录</th>
              <td class="grey">闲聊骚扰/敏感词</td>
              <td class="grey">产品效果投诉</td>
              <td class="grey">快递投诉</td>
              <td class="grey">服务质量投诉</td>
              <td class="grey">闲聊骚扰/敏感词</td>
              <td class="grey">产品效果投诉</td>
              <td class="grey">快递投诉</td>
              <td class="grey">服务质量投诉</td>
            </tr>
            <tr>
              <td>{{ oldUserAnomalyInfoRecords1.chatSensitiveWords }}</td>
              <td>{{ oldUserAnomalyInfoRecords1.productEffectComplaint }}</td>
              <td>{{ oldUserAnomalyInfoRecords1.deliveryComplaint }}</td>
              <td>{{ oldUserAnomalyInfoRecords1.serviceQualityComplaint }}</td>
              <td class="yellow">
                {{ userAnomalyInfoRecords.chatSensitiveWords }}
              </td>
              <td class="yellow">
                {{ userAnomalyInfoRecords.productEffectComplaint }}
              </td>
              <td class="yellow">
                {{ userAnomalyInfoRecords.deliveryComplaint }}
              </td>
              <td class="yellow">
                {{ userAnomalyInfoRecords.serviceQualityComplaint }}
              </td>
            </tr> -->
            </table>
            <table class="esp" border="1" style="margin-top: 6px">
              <tr>
                <th colspan="8">
                  <div class="table-title">
                    <div>用户异常信息记录</div>
                  </div>
                </th>
              </tr>
              <tr>
                <th colspan="4">对话记录1（时间12:00-12:00）</th>
                <th colspan="4">用户当前对话分析（动态更新）</th>
              </tr>
              <tr>
                <td class="grey">闲聊骚扰/敏感词</td>
                <td class="grey">产品投诉</td>
                <td class="grey">物流投诉</td>
                <td class="grey">服务投诉</td>
                <td class="grey">闲聊骚扰/敏感词</td>
                <td class="grey">产品投诉</td>
                <td class="grey">物流投诉</td>
                <td class="grey">服务投诉</td>
              </tr>
              <tr>
                <td>{{ oldUserAnomalyInfoRecords1.chatSensitiveWords }}</td>
                <td>{{ oldUserAnomalyInfoRecords1.productEffectComplaint }}</td>
                <td>{{ oldUserAnomalyInfoRecords1.deliveryComplaint }}</td>
                <td>
                  {{ oldUserAnomalyInfoRecords1.serviceQualityComplaint }}
                </td>
                <td class="yellow">
                  {{ userAnomalyInfoRecords.chatSensitiveWords }}
                </td>
                <td class="yellow">
                  {{ userAnomalyInfoRecords.productEffectComplaint }}
                </td>
                <td class="yellow">
                  {{ userAnomalyInfoRecords.deliveryComplaint }}
                </td>
                <td class="yellow">
                  {{ userAnomalyInfoRecords.serviceQualityComplaint }}
                </td>
              </tr>
            </table>
          </div>
          <img
            style="width: 300px; height: 210px"
            src="../assets/logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- {{ userInfo }}
    --------------------------
    {{ userInfo1 }}
    --------------------------
    {{ userInfo2 }} -->
  </div>
</template>

<script>
export default {
  name: "table-cpn",
  props: ["currentUser", "userInfo1", "userInfo2"],
  methods: {
    getMedinice(list, name) {
      return list.find((ele) => ele.productName == name);
    },
    delInfo() {
      this.$emit("delInfo");
    },
  },
  computed: {
    contact() {
      console.log("this.currentUser===",this.currentUser);
      return this.currentUser?.userInfo?.contact || {};
    },
    basicConditions() {
      return this.currentUser?.userInfo?.basicConditions || {};
    },
    decisionFactors() {
      return this.currentUser?.userInfo?.decisionFactors || {};
    },
    standardTechnicalPoints() {
      return (
        this.currentUser?.knowledgeBaseSuccessRate?.standardTechnicalPoints ||
        {}
      );
    },
    huiRenMedicalKnowledge() {
      return (
        this.currentUser?.knowledgeBaseSuccessRate?.huiRenMedicalKnowledge || {}
      );
    },
    huiRenProductKnowledge() {
      return (
        this.currentUser?.knowledgeBaseSuccessRate?.huiRenProductKnowledge || {}
      );
    },
    huiRenCompanyKnowledge() {
      return (
        this.currentUser?.knowledgeBaseSuccessRate?.huiRenCompanyKnowledge || {}
      );
    },
    userAnomalyInfoRecords() {
      return this.currentUser?.userAnomalyInfoRecords || {};
    },
    purchaseHistory() {
      return this.currentUser?.purchaseHistory || [];
    },

    oldContact1() {
      return this.userInfo1?.userInfo?.contact || {};
    },
    oldBasicConditions1() {
      return this.userInfo1?.userInfo?.basicConditions || {};
    },
    oldDecisionFactors1() {
      return this.userInfo1?.userInfo?.decisionFactors || {};
    },
    oldStandardTechnicalPoints1() {
      return (
        this.userInfo1?.knowledgeBaseSuccessRate?.standardTechnicalPoints || {}
      );
    },
    oldHuiRenMedicalKnowledge1() {
      return (
        this.userInfo1?.knowledgeBaseSuccessRate?.huiRenMedicalKnowledge || {}
      );
    },
    oldHuiRenProductKnowledge1() {
      return (
        this.userInfo1?.knowledgeBaseSuccessRate?.huiRenProductKnowledge || {}
      );
    },
    oldHuiRenCompanyKnowledge1() {
      return (
        this.userInfo1?.knowledgeBaseSuccessRate?.huiRenCompanyKnowledge || {}
      );
    },
    oldUserAnomalyInfoRecords1() {
      return this.userInfo1?.userAnomalyInfoRecords || {};
    },
    oldPurchaseHistory1() {
      return this.userInfo1?.purchaseHistory || [];
    },

    oldContact2() {
      return this.userInfo2?.userInfo?.contact || {};
    },
    oldBasicConditions2() {
      return this.userInfo2?.userInfo?.basicConditions || {};
    },
    oldDecisionFactors2() {
      return this.userInfo2?.userInfo?.decisionFactors || {};
    },
    // oldStandardTechnicalPoints2() {
    //     return this.userInfo2?.knowledgeBaseSuccessRate?.standardTechnicalPoints || {};
    // },
    // oldHuiRenMedicalKnowledge2() {
    //     return this.userInfo2?.knowledgeBaseSuccessRate?.huiRenMedicalKnowledge || {};
    // },
    // oldHuiRenProductKnowledge2() {
    //     return this.userInfo2?.knowledgeBaseSuccessRate?.huiRenProductKnowledge || {};
    // },
    // oldHuiRenCompanyKnowledge2() {
    //     return this.userInfo2?.knowledgeBaseSuccessRate?.huiRenCompanyKnowledge || {};
    // },
  },
};
</script>

<style lang="less" scoped>
table {
  // transform: scaleY(0.9);
  box-shadow: 0px 6px 4px 0px #ddd;
  transform-origin: 0 0;
  max-height: 50vh;
  .grey,
  th {
    background: #fcfbfd;
  }
  .yellow {
    background: #fbf7e9;
  }
  .white {
    background: #fff;
    font-weight: 900;
  }
  &:not(.white, .yellow, .grey, th) {
    background: #eef3f9;
  }
}
table,
tr,
td,
th {
  border-collapse: collapse;
  text-align: center;
  font-size: 10px;
  border: 1px solid #dddddd;
}
th {
  font-size: 12px;
}

// .lf-2 {
//   td {
//     max-width: 100px;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
// }
.table-box {
  background: #f2f5f6;
  display: flex;
  padding-bottom: 20px;
  .lf-1 {
    flex: 42;
  }
  .lf-2 {
    flex: 60;
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
tr {
  height: 20px;
}
.table-two {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
  .esp {
    width: 100%;
    box-shadow: 0px 6px 4px 0px #ddd;
  }
}

.contact {
  margin-top: 20px;
}
.title {
  font-size: 12px;
  font-weight: bold;
}
.text-left {
  text-align: left;
  padding-left: 24px;
}
.table-title {
  height: 44px;
  background-color: #eaecf0;
  box-shadow: 6px 6px 4px 0px #ddd;
  margin: -1px -1px 1px -1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
