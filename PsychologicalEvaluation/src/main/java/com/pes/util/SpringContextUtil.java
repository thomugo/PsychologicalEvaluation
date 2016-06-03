package com.pes.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

@Component
public class SpringContextUtil implements ApplicationContextAware {

         private static ApplicationContext applicationContext; // Spring应用上下文环境

         /*

          * 实现了ApplicationContextAware 接口，必须实现该方法；

          *通过传递applicationContext参数初始化成员变量applicationContext

          */
         @Override  
         public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
               SpringContextUtil.applicationContext = applicationContext;
         }

 
         /**
          * 取得存储在静态变量中的ApplicationContext.
          */
         public static ApplicationContext getApplicationContext() {
                return applicationContext;
         }

         /**
          * 从静态变量ApplicationContext中取得Bean, 自动转型为所赋值对象的类型.
          */
          @SuppressWarnings("unchecked")
          public static <T> T getBean(String name) throws BeansException {
        	  Assert.notNull(applicationContext,
                     "applicaitonContext未注入,请在applicationContext.xml中定义SpringContextUtil");
                     return (T) applicationContext.getBean(name);
           }
          
          /**
           * 从静态变量ApplicationContext中取得Bean, 自动转型为所赋值对象的类型.
           */
          @SuppressWarnings("unchecked")
          public static <T> T getBean(Class<T> clazz) {
              checkApplicationContext();
              return (T) applicationContext.getBeansOfType(clazz);
          }
          
          private static void checkApplicationContext() {
        	  if(applicationContext == null)
        		  System.out.println("applicationContext have not initiated");
        	  else
        		  System.out.println("applicationContext have initiated");
              Assert.notNull(applicationContext,
                      "applicaitonContext未注入,请在applicationContext.xml中定义SpringContextUtil");
          }

}