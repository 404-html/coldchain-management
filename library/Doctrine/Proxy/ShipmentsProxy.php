<?php

namespace Doctrine\Proxy;

/**
 * THIS CLASS WAS GENERATED BY THE DOCTRINE ORM. DO NOT EDIT THIS FILE.
 */
class ShipmentsProxy extends \Shipments implements \Doctrine\ORM\Proxy\Proxy
{
    private $_entityPersister;
    private $_identifier;
    public $__isInitialized__ = false;
    public function __construct($entityPersister, $identifier)
    {
        $this->_entityPersister = $entityPersister;
        $this->_identifier = $identifier;
    }
    /** @private */
    public function __load()
    {
        if (!$this->__isInitialized__ && $this->_entityPersister) {
            $this->__isInitialized__ = true;

            if (method_exists($this, "__wakeup")) {
                // call this after __isInitialized__to avoid infinite recursion
                // but before loading to emulate what ClassMetadata::newInstance()
                // provides.
                $this->__wakeup();
            }

            if ($this->_entityPersister->load($this->_identifier, $this) === null) {
                throw new \Doctrine\ORM\EntityNotFoundException();
            }
            unset($this->_entityPersister, $this->_identifier);
        }
    }
    
    
    public function getPkId()
    {
        $this->__load();
        return parent::getPkId();
    }

    public function setReferenceNumber($referenceNumber)
    {
        $this->__load();
        return parent::setReferenceNumber($referenceNumber);
    }

    public function getReferenceNumber()
    {
        $this->__load();
        return parent::getReferenceNumber();
    }

    public function setShipmentDate($shipmentDate)
    {
        $this->__load();
        return parent::setShipmentDate($shipmentDate);
    }

    public function getShipmentDate()
    {
        $this->__load();
        return parent::getShipmentDate();
    }

    public function setTransactionNumber($transactionNumber)
    {
        $this->__load();
        return parent::setTransactionNumber($transactionNumber);
    }

    public function getTransactionNumber()
    {
        $this->__load();
        return parent::getTransactionNumber();
    }

    public function setTransactionCounter($transactionCounter)
    {
        $this->__load();
        return parent::setTransactionCounter($transactionCounter);
    }

    public function getTransactionCounter()
    {
        $this->__load();
        return parent::getTransactionCounter();
    }

    public function setEta($eta)
    {
        $this->__load();
        return parent::setEta($eta);
    }

    public function getEta()
    {
        $this->__load();
        return parent::getEta();
    }

    public function setShipmentQuantity($shipmentQuantity)
    {
        $this->__load();
        return parent::setShipmentQuantity($shipmentQuantity);
    }

    public function getShipmentQuantity()
    {
        $this->__load();
        return parent::getShipmentQuantity();
    }

    public function setCreatedDate($createdDate)
    {
        $this->__load();
        return parent::setCreatedDate($createdDate);
    }

    public function getCreatedDate()
    {
        $this->__load();
        return parent::getCreatedDate();
    }

    public function setModifiedDate($modifiedDate)
    {
        $this->__load();
        return parent::setModifiedDate($modifiedDate);
    }

    public function getModifiedDate()
    {
        $this->__load();
        return parent::getModifiedDate();
    }

    public function setFundingSource(\Warehouses $fundingSource)
    {
        $this->__load();
        return parent::setFundingSource($fundingSource);
    }

    public function getFundingSource()
    {
        $this->__load();
        return parent::getFundingSource();
    }

    public function setModifiedBy(\Users $modifiedBy)
    {
        $this->__load();
        return parent::setModifiedBy($modifiedBy);
    }

    public function getModifiedBy()
    {
        $this->__load();
        return parent::getModifiedBy();
    }

    public function setItemPackSize(\ItemPackSizes $itemPackSize)
    {
        $this->__load();
        return parent::setItemPackSize($itemPackSize);
    }

    public function getItemPackSize()
    {
        $this->__load();
        return parent::getItemPackSize();
    }

    public function setStakeholderActivity(\StakeholderActivities $stakeholderActivity)
    {
        $this->__load();
        return parent::setStakeholderActivity($stakeholderActivity);
    }

    public function getStakeholderActivity()
    {
        $this->__load();
        return parent::getStakeholderActivity();
    }

    public function setWarehouse(\Warehouses $warehouse)
    {
        $this->__load();
        return parent::setWarehouse($warehouse);
    }

    public function getWarehouse()
    {
        $this->__load();
        return parent::getWarehouse();
    }

    public function setDraft($draft)
    {
        $this->__load();
        return parent::setDraft($draft);
    }

    public function getDraft()
    {
        $this->__load();
        return parent::getDraft();
    }

    public function setCreatedBy(\Users $createdBy)
    {
        $this->__load();
        return parent::setCreatedBy($createdBy);
    }

    public function getCreatedBy()
    {
        $this->__load();
        return parent::getCreatedBy();
    }


    public function __sleep()
    {
        return array('__isInitialized__', 'pkId', 'referenceNumber', 'transactionNumber', 'transactionCounter', 'shipmentDate', 'eta', 'draft', 'shipmentQuantity', 'createdDate', 'modifiedDate', 'fundingSource', 'modifiedBy', 'itemPackSize', 'stakeholderActivity', 'warehouse', 'createdBy');
    }

    public function __clone()
    {
        if (!$this->__isInitialized__ && $this->_entityPersister) {
            $this->__isInitialized__ = true;
            $class = $this->_entityPersister->getClassMetadata();
            $original = $this->_entityPersister->load($this->_identifier);
            if ($original === null) {
                throw new \Doctrine\ORM\EntityNotFoundException();
            }
            foreach ($class->reflFields AS $field => $reflProperty) {
                $reflProperty->setValue($this, $reflProperty->getValue($original));
            }
            unset($this->_entityPersister, $this->_identifier);
        }
        
    }
}