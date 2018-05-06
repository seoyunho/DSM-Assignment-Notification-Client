import React, { Component } from 'react';
import { getDateFormat } from '../../common';
import AssignmentByStudent from './AssignmentByStudent';
import AssignmentByAdmin from './AssignmentByAdmin';
import AssignmentInfo from './AssignmentInfo';
import '../../css/modal.css';

class AssignmentDetail extends Component {
  render(){
    const { assignment, onClickHandler } = this.props;
    const assingmentInfo = [
      {title: "과제명", contents: assignment.title},
      {title: "작성자", contents: assignment.auther},
      {title: "가간", contents: getDateFormat(assignment.start) + ' ~ ' + getDateFormat(assignment.end)},
      {title: "설명", contents: assignment.detail},
    ]
    return (
      <div id="assignment-modal-wrapper">
        <div className="assignment-modal-top-bottm top" >
          <img 
            src={require('../../assets/img/modal-close.png')} 
            alt="close-modal"
            onClick = {onClickHandler} 
          />
        </div>
        <div id="assignment-modal-contents-wrapper">
          {assingmentInfo.map((info, index) => {
            return <AssignmentInfo
                    key = {index}
                    title = {info.title}
                    contents = {info.contents}
                   />
          })}
        </div>
        {this.renderModalMode(this.props.id)}
      </div>
    )
  }

  renderModalMode = (mode) => {
    /* 
    0 => mypage 
    1 => 학생용 모달 
    2 => 선생님용 모달
    3 => 선생님용 모달 수정 버전
    4 => 과제 다운로드 모달
    */
    switch(mode) {
      case 1 :
        return <AssignmentByStudent />

      case 2 :
        return <AssignmentByAdmin 
                btnName = "수정하기"
               />
      
      case 3 : 
        return <AssignmentByAdmin 
                btnName = "수정완료"
               />

      case 4 : 
        return <AssignmentByAdmin 
                btnName = "다운로드"
               />


      default : return;
    }
  }
}

export default AssignmentDetail;