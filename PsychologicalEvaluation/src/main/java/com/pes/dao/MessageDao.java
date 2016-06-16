package com.pes.dao;

import java.util.List;
import com.pes.entity.Message;

public interface MessageDao extends GenericDao2<Message, Integer>{
	public Message findById(int fromId, int toId);
	/**
	 * 获取用戸离线消息
	 * @fromId 发送者ID
	 * @toId		接收者ID 
	 * @return List<Message>
	 */
	public List<Message> getOffLineMessages(int fromId, int toId);
	
	/**
	 * 获取用戸离线消息发送者(去重)
	 * @userId 	用戸ID
	 * @return List<Message>
	 */
	public List<Integer> getOffLineMessagesSenders(int userId);
	
	/**
	 * 获取用戸离线消息的数量
	 * @userId 	ID
	 * 
	 * @return count：消息数量
	 */
	public int getOffLineMessageCount(int userId);
	
	/**
	 * 获取用戸所有历史消息记录：倒序排列
	 * @userId 	ID
	 * @return List<Message>
	 */
	public List<Message> getAllHistoryMessages(int userId);
	
	/**
	 * 获取用戸所有历史消息记录条数
	 * @userId 	ID
	 * @return int
	 */
	public int getHistoryMessagesCount(int userId);
	
	/**
     * <p>
     * 根据每页记录的数量,计算出总的历史消息分页数
     * </p>
     *
     * @param pageSize 每页记录的数量
     * @return 分页总数
     */  
   public int getMaxHistoryMessagePageNo(int pageSize, int userId);   
	
   /**
    * 根据给定的页码进行分页查找,结果正序排列.
    *
    * @param pageNo : 要查询的页码
    * @param pageSize : 每页记录数
    * @param userId:	用户ID
    * @return 匹配的实体列表
    */  
  public List<Message> findHistoryMessagesByPage(final int pageNo, final int pageSize, int userId);   
  
	/**
	 * 获取广播消息数量
	 */
	public int getBroadCastMessageCount();
	
	/**
	 * 获取未读广播消息: 倒序排列
	 * @number 	未读消息数量
	 * @return 	List<Message>
	 */
	public List<Message> getUnreadBroadCastMessages(final int number);
	
	/**
	 * 获得所有广播消息 ： 倒序排列
	 * return List<Message>
	 */
	public List<Message> getAllBroadCastMessages();
	
	/**
     * <p>
     * 根据每页记录的数量,计算出总的广播消息分页数
     * </p>
     *
     * @param pagaSize 每页记录的数量
     * @return 分页总数
     */  
   public int getMaxBCPageNo(int pageSize);   
   
	/**
     * 根据给定的页码进行分页查找, 结果按时间倒序排列.
     *
     * @param pageNo : 要查询的页码
     * @param pageSize : 每页记录数
     * @return 匹配的实体列表
     */  
   public List<Message> findBroadCastMessagesByPage(final int pageNo, final int pageSize);   
   
   public void updateOfflineMessageState(final int fromId, final int toId);
	
}
